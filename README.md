# Shelly 1 Mini Gen3 — Bitfocus Companion Module

A [Bitfocus Companion](https://bitfocus.io/companion) user module for controlling and monitoring the **Shelly 1 Mini Gen3** smart relay over a local network connection.

---

## Table of Contents

- [Overview](#overview)
- [Requirements](#requirements)
- [Installation](#installation)
  - [Development machine (Windows)](#development-machine-windows)
  - [Linux server (Companion usermodules)](#linux-server-companion-usermodules)
  - [Updating from GitHub](#updating-from-github)
- [Configuration](#configuration)
- [Actions](#actions)
- [Feedbacks](#feedbacks)
- [Variables](#variables)
  - [relay\_state](#relay_state)
  - [input\_state](#input_state)
  - [input\_push\_type](#input_push_type)
- [How it works — Architecture](#how-it-works--architecture)
  - [WebSocket connection](#websocket-connection)
  - [Input event flow](#input-event-flow)
  - [Relay command flow](#relay-command-flow)
- [File structure](#file-structure)
- [Troubleshooting](#troubleshooting)

---

## Overview

This module connects to a **Shelly 1 Mini Gen3** device on your local network and exposes:

- **3 actions** — turn the relay on, off, or toggle it
- **3 feedbacks** — visual button states for relay on, relay off, and input active
- **3 variables** — live relay state, input state, and input push type (single/double/triple)

Communication uses a persistent **WebSocket** connection to the device's `/rpc` endpoint for real-time event delivery, and **HTTP RPC** calls for sending relay commands.

---

## Requirements

| Requirement | Version |
|---|---|
| Bitfocus Companion | v3.x or later |
| Node.js | ≥ 18 |
| Shelly 1 Mini Gen3 firmware | Any Gen3 firmware with WebSocket RPC support |

The device must be reachable on the local network from the machine running Companion. No cloud account or internet connection is required — everything runs locally.

---

## Installation

### Development machine (Windows)

```bash
cd path\to\ShellyMiniGen3
npm install
```

Then add the module folder as a **usermodule** in Companion's settings.

### Linux server (Companion usermodules)

If Companion is running on a Linux server, clone the repository into your `usermodules` directory:

```bash
cd /opt/companion-module-dev
git clone https://github.com/benjahj/Shelly-mini-gen-3-v2.git ShellyMiniGen3
cd ShellyMiniGen3
npm install
```

Then restart Companion so it picks up the new module.

### Updating from GitHub

Pull the latest changes into the installed folder and restart Companion:

```bash
cd /opt/companion-module-dev/ShellyMiniGen3
git pull origin main
```

> If you want to fully overwrite all local files with the remote version (no local changes kept):
> ```bash
> git fetch origin && git reset --hard origin/main
> ```

---

## Configuration

When adding the module in Companion, two fields must be filled in:

| Field | Description | Default |
|---|---|---|
| **Device IP Address** | Local IP address of the Shelly device (e.g. `192.168.1.50`) | *(required)* |
| **Port** | HTTP/WebSocket port of the device | `80` |

After saving, the module immediately attempts to connect via WebSocket. The connection status is visible in the Companion module list (green = OK, yellow = connecting, red = error).


---

## Actions

Actions are commands you assign to buttons in Companion to control the relay.

| Action ID | Name | Description |
|---|---|---|
| `relay_on` | **Relay - Turn ON** | Closes the relay (switch on). Sends `Switch.Set?id=0&on=true` via HTTP and immediately updates the `relay_state` variable and feedbacks. |
| `relay_off` | **Relay - Turn OFF** | Opens the relay (switch off). Sends `Switch.Set?id=0&on=false` via HTTP and immediately updates the `relay_state` variable and feedbacks. |
| `relay_toggle` | **Relay - Toggle** | Toggles the relay to the opposite state. Sends `Switch.Toggle?id=0` via HTTP. The new state is read back from the next WebSocket status update — no optimistic update is applied. |

> **Tip:** Use `relay_on` and `relay_off` when you need guaranteed state (e.g. pressing ON should always turn it on regardless of current state). Use `relay_toggle` for a single button that flips the relay back and forth.

---

## Feedbacks

Feedbacks change the appearance of a Companion button based on the current device state. All feedbacks are **boolean** type (they either apply their style or they don't).

| Feedback ID | Name | Default style | Condition |
|---|---|---|---|
| `relay_on` | **Relay is ON** | Green background, white text | Applied when the relay is currently ON |
| `relay_off` | **Relay is OFF** | Red background, white text | Applied when the relay is currently OFF |
| `input_active` | **Input is Active** | Orange background, black text | Applied while the physical input is pressed / switched on |

Feedbacks update in real-time as the device pushes state changes over WebSocket.

---

## Variables

Variables expose live device data that can be shown on button labels or used in expressions anywhere in Companion. Reference them using the syntax `$(instanceLabel:variableId)`.

### relay_state

| Variable ID | `relay_state` |
|---|---|
| **Full reference** | `$(Shelly_Relay_Forhal_TV:relay_state)` *(replace label with yours)* |
| **Possible values** | `on` — relay is closed / `off` — relay is open |
| **Updated by** | WebSocket `NotifyStatus` → `switch:0.output`, periodic `Switch.GetStatus` poll, and optimistic updates from relay actions |

### input_state

| Variable ID | `input_state` |
|---|---|
| **Full reference** | `$(Shelly_Relay_Forhal_TV:input_state)` |
| **Possible values** | `on` — input is currently pressed or switched on / `off` — input is released or switched off |
| **Updated by** | WebSocket `NotifyEvent` → `btn_down` / `btn_up` (button mode) or `toggle_on` / `toggle_off` (switch mode), and `NotifyStatus` → `input:0.state` |

### input_push_type

| Variable ID | `input_push_type` |
|---|---|
| **Full reference** | `$(Shelly_Relay_Forhal_TV:input_push_type)` |
| **Possible values** | `N/A` · `Single` · `Double` · `Triple` |
| **Updated by** | WebSocket `NotifyEvent` → `single_push`, `double_push`, `triple_push` |
| **Auto-reset** | Resets back to `N/A` automatically **1 second** after being set to Single / Double / Triple |

**Timing of `input_push_type`:**

```
User presses button
  └─ btn_down  →  input_state = on,  input_push_type = N/A  (reset for new press)
  └─ btn_up    →  input_state = off
  └─ single_push / double_push / triple_push  →  input_push_type = Single / Double / Triple
                                                   (1 second later → N/A)
```

> The push type event arrives **after** `btn_up` — the device waits to see if a second or third press follows before deciding the type.

---

## How it works — Architecture

### WebSocket connection

On startup (and after any config change) the module opens a persistent WebSocket to:

```
ws://<device-ip>:<port>/rpc
```

Connection lifecycle:

1. **Connect** — sends `Shelly.GetStatus` to immediately receive full device state and register as a subscriber for push notifications.
2. **Polling** — every 2 seconds, sends `Switch.GetStatus` as a safety net in case a `NotifyStatus` event is missed.
3. **Reconnect** — if the connection drops, waits 5 seconds then reconnects automatically.
4. **Cleanup** — all timers and the socket are fully cleaned up when the module is destroyed or the config changes.

### Input event flow

The Shelly device sends `NotifyEvent` frames in real-time over WebSocket for all input activity:

| WebSocket event | Input mode | Effect in module |
|---|---|---|
| `btn_down` | button | `input_state = on`, `input_push_type = N/A` |
| `btn_up` | button | `input_state = off` |
| `single_push` | button | `input_push_type = Single` (→ N/A after 1 s) |
| `double_push` | button | `input_push_type = Double` (→ N/A after 1 s) |
| `triple_push` | button | `input_push_type = Triple` (→ N/A after 1 s) |
| `toggle_on` | switch | `input_state = on`, `input_push_type = N/A` |
| `toggle_off` | switch | `input_state = off` |

### Relay command flow

Relay commands are sent via **HTTP GET** to the device's RPC endpoint:

```
GET http://<device-ip>/rpc/Switch.Set?id=0&on=true    → relay ON
GET http://<device-ip>/rpc/Switch.Set?id=0&on=false   → relay OFF
GET http://<device-ip>/rpc/Switch.Toggle?id=0         → toggle
```

For `relay_on` and `relay_off`, the module applies an **optimistic update** immediately (before the HTTP response) so the button feedback changes without delay. The actual confirmed state arrives moments later via WebSocket `NotifyStatus`.

---

## File structure

```
ShellyMiniGen3/
├── companion/
│   └── manifest.json       # Module metadata (id, name, version, runtime)
├── src/
│   ├── main.js             # Main module class — WebSocket, lifecycle, state management
│   ├── actions.js          # Companion action definitions (relay on/off/toggle)
│   ├── feedbacks.js        # Companion feedback definitions (relay_on, relay_off, input_active)
│   ├── variables.js        # Companion variable definitions (relay_state, input_state, input_push_type)
│   └── upgrades.js         # Migration scripts for future version upgrades
├── package.json            # Node.js package manifest and dependencies
└── README.md               # This file
```

---

## Troubleshooting

| Problem | Likely cause | Solution |
|---|---|---|
| Module shows **ConnectionFailure** | Wrong IP or device is offline | Check the IP in module config; ping the device |
| Module shows **Connecting** indefinitely | Firewall blocking WebSocket port 80 | Allow port 80 TCP from Companion server to Shelly device |
| Relay state in Companion lags behind reality | WebSocket event missed | State is also polled every 2 s — it will self-correct |
| `input_push_type` never shows Single/Double/Triple | Input configured as **switch** mode in Shelly app | Change input type to **button** in the Shelly mobile app or web UI |
| Actions do nothing | HTTP command failing | Check Companion debug log for `Command failed` entries; verify device IP and port |
| Module not visible in Companion | usermodules path not configured | Ensure the `ShellyMiniGen3` folder is inside the configured usermodules directory and Companion has been restarted |


