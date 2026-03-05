# Add support for Shelly Gen2/Gen3 devices via WebSocket RPC

## Summary

This PR proposes adding support for **Shelly Gen2/Gen3 devices** (starting with the
Shelly 1 Mini Gen3) to the existing `companion-module-shelly-http` module.

The current module uses the **Gen1 HTTP `/status` API** with polling, which does not
exist on Gen2/Gen3 hardware. Gen2/Gen3 devices use a completely different protocol:
the **JSON-RPC 2.0 API** served over HTTP and WebSocket. This PR implements a
WebSocket-based connection to properly support these newer devices, including
reliable input/button state detection.

---

## Problem: Why HTTP polling does not work for Gen3 input detection

The current architecture polls `http://<ip>/status` on an interval. This has two
fundamental problems when applied to Gen2/Gen3 Shelly devices:

### 1. The `/status` endpoint does not exist on Gen2/Gen3

Gen2/Gen3 devices expose an RPC API at `/rpc/<Method>`. For example:
- `GET /rpc/Switch.GetStatus?id=0` — relay output state
- `GET /rpc/Input.GetStatus?id=0` — input state

### 2. When input is configured as type `button`, `state` is always `null`

From the [Shelly Gen2+ Input component docs](https://shelly-api-docs.shelly.cloud/gen2/ComponentsAndServices/Input):

> `state` — boolean or null — **State of the input (null if the input instance is
> stateless, i.e. for type button)**

This means that for any device where the user has set the input to type `button`
in the Shelly app (which is the typical setting for a push-button), polling
`Input.GetStatus` will always return `"state": null`. A rising-edge comparison
against `null` can never trigger, so button presses are silently missed no matter
how short the polling interval is.

For type `switch`, `state` toggles correctly, but a 300 ms poll still risks missing
a fast tap if the user releases the button before the next cycle.

### 3. HTTP has no push/notification support

The Shelly RPC docs state explicitly:

> HTTP is used for one-shot request-response calls. It does not support connection
> keepalive and **notifications cannot be sent and received through this channel**.

Button events (`single_push`, `btn_down`, `toggle_on`, etc.) are only delivered
through push channels.

---

## Solution: WebSocket RPC connection

The Shelly Gen2/Gen3 WebSocket endpoint (`ws://<ip>/rpc`) keeps a persistent
connection open and delivers `NotifyEvent` and `NotifyStatus` frames in real-time
as the device state changes.

From the Shelly docs:

> Clients must send at least one request frame with a valid `src` to be able to
> receive notifications from the device.

After the initial handshake, the device pushes:

| Frame method | When it fires |
|---|---|
| `NotifyEvent` | Every input event: `btn_down`, `btn_up`, `single_push`, `toggle_on`, `toggle_off`, … |
| `NotifyStatus` | Every time a component state changes (relay output, input state, …) |

This means input events are received within milliseconds of the physical press,
independent of any polling interval.

---

## What was implemented

A self-contained module was built for the Shelly 1 Mini Gen3 using this approach.
The full source is available at:
**https://github.com/benjahj/Shelly-mini-gen-3-v2**

### Architecture

```
WebSocket ws://<ip>/rpc
  └─ on open    → send Shelly.GetStatus (registers as notification subscriber)
  └─ on message → parse NotifyEvent  → update input_state variable + feedback
               → parse NotifyStatus → update relay_state variable + feedback
               → parse GetStatus response → initial relay state on connect

HTTP /rpc/Switch.Set?id=0&on=true   (relay commands — reliable one-shot)
HTTP /rpc/Switch.Toggle?id=0
```

### Input state tracking

| WebSocket event received | Input state set to |
|---|---|
| `NotifyEvent` → `btn_down` | `on` |
| `NotifyEvent` → `btn_up` | `off` |
| `NotifyEvent` → `toggle_on` | `on` |
| `NotifyEvent` → `toggle_off` | `off` |
| `NotifyStatus` → `input:0.state = true` | `on` |
| `NotifyStatus` → `input:0.state = false` | `off` |

This works for **both** Shelly input types:
- `button` — uses `btn_down` / `btn_up` events
- `switch` — uses `toggle_on` / `toggle_off` events

### Companion features exposed

| Feature | Detail |
|---|---|
| **Variable** `relay_state` | `"on"` or `"off"` — current relay output |
| **Variable** `input_state` | `"on"` or `"off"` — current input/button state |
| **Feedback** `relay_on` | True while relay output is ON |
| **Feedback** `relay_off` | True while relay output is OFF |
| **Feedback** `input_active` | True while input is held / switched on |
| **Action** Relay ON | Sends `Switch.Set?id=0&on=true` via HTTP |
| **Action** Relay OFF | Sends `Switch.Set?id=0&on=false` via HTTP |
| **Action** Relay Toggle | Sends `Switch.Toggle?id=0` via HTTP |

### Reconnection

The module automatically reconnects the WebSocket after 5 seconds if the
connection drops. Relay state is also refreshed every 2 seconds via a
`Switch.GetStatus` RPC request over the open WebSocket, as a safety net in
case a `NotifyStatus` frame is missed.

---

## Proposed integration path

There are two ways this could be merged into the existing module:

**Option A — Add a Gen2/Gen3 device category alongside the existing Gen1 products.**
The config dropdown already has a `shellyProduct` field. Gen2/Gen3 devices could be
added as new product IDs (e.g. `201` for Shelly 1 Mini Gen3). When a Gen2/Gen3
product is selected, the module switches from HTTP polling to WebSocket RPC.

**Option B — Create a separate `companion-module-shelly-rpc` module** for all
Gen2/Gen3 devices, keeping the existing Gen1 module unchanged.

I am happy to implement either approach based on maintainer preference.

---

## Testing

Tested with:
- **Device**: Shelly 1 Mini Gen3 (firmware 1.x)
- **Companion**: 4.2.4
- **Input type**: both `button` and `switch` (configured in Shelly web UI)
- **Node.js**: 19.8.1 (with `@companion-module/base` 1.14.1 and `ws` 8.x)

Test steps:
1. Load the module in Companion and enter the device IP.
2. Observe `relay_state` variable updates immediately when toggling the relay.
3. Press the physical button — observe `input_state` changes to `on` on `btn_down`
   and back to `off` on `btn_up`.
4. Switch input type to `switch` in Shelly settings — observe `input_state` reflects
   `toggle_on` / `toggle_off` correctly.
5. Disconnect the device from the network — observe Companion status changes to
   `ConnectionFailure` and the module reconnects automatically when restored.

---

## References

- Shelly Gen2+ RPC Protocol: https://shelly-api-docs.shelly.cloud/gen2/General/RPCProtocol
- Shelly RPC Channels (WebSocket): https://shelly-api-docs.shelly.cloud/gen2/General/RPCChannels
- Shelly Input Component: https://shelly-api-docs.shelly.cloud/gen2/ComponentsAndServices/Input
- Shelly Switch Component: https://shelly-api-docs.shelly.cloud/gen2/ComponentsAndServices/Switch
- Source repository: https://github.com/benjahj/Shelly-mini-gen-3-v2

