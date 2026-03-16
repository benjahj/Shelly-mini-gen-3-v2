'use strict'

const { InstanceBase, Regex, runEntrypoint, InstanceStatus } = require('@companion-module/base')
const http = require('http')
const WebSocket = require('ws')
const UpgradeScripts = require('./upgrades')
const UpdateActions = require('./actions')
const UpdateFeedbacks = require('./feedbacks')
const UpdateVariableDefinitions = require('./variables')

class ShellyMiniGen3 extends InstanceBase {
	constructor(internal) {
		super(internal)

		// Internal state
		this.relayState = false
		this.inputState = false
		this.inputPushType = 'N/A'

		// WebSocket
		this.ws = null
		this.wsConnected = false
		this.wsReconnectTimer = null
		this.wsStatusTimer = null
		this.msgId = 1
	}

	// ─── Lifecycle ────────────────────────────────────────────────────────────

	async init(config) {
		this.config = config
		this.updateStatus(InstanceStatus.Connecting)
		this.updateActions()
		this.updateFeedbacks()
		this.updateVariableDefinitions()
		this._resetVariables()
		this._connectWebSocket()
	}

	async destroy() {
		this.log('debug', 'Module destroyed — cleaning up')
		this._cleanupWs()
	}

	async configUpdated(config) {
		this.config = config
		this._cleanupWs()
		this._connectWebSocket()
	}

	// ─── Config UI ────────────────────────────────────────────────────────────

	getConfigFields() {
		return [
			{
				type: 'textinput',
				id: 'host',
				label: 'Device IP Address',
				width: 8,
				regex: Regex.IP,
				required: true,
			},
			{
				type: 'textinput',
				id: 'port',
				label: 'Port',
				width: 4,
				default: '80',
				regex: Regex.PORT,
			},
		]
	}

	// ─── Variable helpers ─────────────────────────────────────────────────────

	_resetVariables() {
		this.setVariableValues({
			relay_state: 'off',
			input_state: 'N/A',
			input_push_type: 'N/A',
		})
	}

	// ─── WebSocket ────────────────────────────────────────────────────────────

	_cleanupWs() {
		if (this.wsReconnectTimer) {
			clearTimeout(this.wsReconnectTimer)
			this.wsReconnectTimer = null
		}
		if (this.wsStatusTimer) {
			clearInterval(this.wsStatusTimer)
			this.wsStatusTimer = null
		}
		if (this.ws) {
			this.ws.removeAllListeners()
			try { this.ws.terminate() } catch (_) {}
			this.ws = null
		}
		this.wsConnected = false
	}

	_connectWebSocket() {
		if (!this.config || !this.config.host) {
			this.updateStatus(InstanceStatus.BadConfig, 'No IP address configured')
			return
		}

		const port = parseInt(this.config.port) || 80
		const url = `ws://${this.config.host}:${port}/rpc`
		this.log('debug', `Connecting WebSocket to ${url}`)
		this.updateStatus(InstanceStatus.Connecting)

		let ws
		try {
			ws = new WebSocket(url, { handshakeTimeout: 4000 })
		} catch (err) {
			this.log('error', `WebSocket creation failed: ${err.message}`)
			this._scheduleReconnect()
			return
		}
		this.ws = ws

		ws.on('open', () => {
			this.wsConnected = true
			this.log('debug', 'WebSocket connected')
			this.updateStatus(InstanceStatus.Ok)

			// Send an initial request so the device registers us as a subscriber
			// and starts pushing NotifyEvent / NotifyStatus messages.
			this._wsSend('Shelly.GetStatus', {})

			// Periodically refresh relay state in case NotifyStatus was missed
			this.wsStatusTimer = setInterval(() => {
				if (this.wsConnected) this._wsSend('Switch.GetStatus', { id: 0 })
			}, 2000)
		})

		ws.on('message', (data) => {
			try {
				this._handleWsMessage(JSON.parse(data.toString()))
			} catch (e) {
				this.log('warn', `WS parse error: ${e.message}`)
			}
		})

		ws.on('close', () => {
			this.log('debug', 'WebSocket closed — will reconnect')
			this.wsConnected = false
			if (this.wsStatusTimer) { clearInterval(this.wsStatusTimer); this.wsStatusTimer = null }
			this.updateStatus(InstanceStatus.ConnectionFailure, 'WebSocket disconnected')
			this._scheduleReconnect()
		})

		ws.on('error', (err) => {
			// error is always followed by close, so just log it
			this.log('warn', `WS error: ${err.message}`)
		})
	}

	_scheduleReconnect() {
		if (this.wsReconnectTimer) return
		this.wsReconnectTimer = setTimeout(() => {
			this.wsReconnectTimer = null
			this._connectWebSocket()
		}, 5000)
	}

	_wsSend(method, params) {
		if (!this.ws || this.ws.readyState !== WebSocket.OPEN) return
		const frame = { id: this.msgId++, src: 'companion-shelly', method, params }
		this.ws.send(JSON.stringify(frame))
	}

	_handleWsMessage(msg) {
		// ── Response to Switch.GetStatus ──────────────────────────────────
		if (msg.result && typeof msg.result.output === 'boolean') {
			this._updateRelayState(msg.result.output)
		}

		// ── Shelly.GetStatus response (initial load) ──────────────────────
		if (msg.result) {
			const sw = msg.result['switch:0']
			if (sw && typeof sw.output === 'boolean') this._updateRelayState(sw.output)

			const inp = msg.result['input:0']
			if (inp && typeof inp.state === 'boolean') this._updateInputState(inp.state)
		}

		// ── NotifyStatus — device pushes state changes proactively ────────
		if (msg.method === 'NotifyStatus') {
			const params = msg.params || {}

			const sw = params['switch:0']
			if (sw && typeof sw.output === 'boolean') this._updateRelayState(sw.output)

			const inp = params['input:0']
			if (inp && typeof inp.state === 'boolean') this._updateInputState(inp.state)
		}

		// ── NotifyEvent — button / input events ───────────────────────────
		// Shelly pushes these in real-time over WebSocket regardless of input type:
		//   type=button → btn_down, btn_up, single_push, double_push, triple_push, long_push
		//   type=switch → toggle_on, toggle_off
		if (msg.method === 'NotifyEvent') {
			const events = msg.params && msg.params.events
			if (Array.isArray(events)) {
				for (const ev of events) {
					if (ev.component !== 'input:0') continue
					this.log('debug', `Input event: ${ev.event}`)

					if (ev.event === 'btn_down' || ev.event === 'toggle_on') {
						this._updateInputState(true)
						// Reset push type at the start of each new press
						this._updateInputPushType('N/A')
					} else if (ev.event === 'btn_up' || ev.event === 'toggle_off') {
						this._updateInputState(false)
					} else if (ev.event === 'single_push') {
						this._updateInputPushType('Single')
					} else if (ev.event === 'double_push') {
						this._updateInputPushType('Double')
					} else if (ev.event === 'triple_push') {
						this._updateInputPushType('Triple')
					}
				}
			}
		}
	}

	_updateRelayState(output) {
		this.relayState = output
		this.setVariableValues({ relay_state: output ? 'on' : 'off' })
		this.checkFeedbacks('relay_on', 'relay_off')
	}

	_updateInputState(active) {
		this.inputState = active
		this.setVariableValues({ input_state: active ? 'Pushed' : 'N/A' })
		this.checkFeedbacks('input_active')
	}

	_updateInputPushType(type) {
		this.inputPushType = type
		this.setVariableValues({ input_push_type: type })
	}

	// ─── HTTP helpers (used only for sending commands) ────────────────────────

	httpGet(path) {
		return new Promise((resolve, reject) => {
			const options = {
				hostname: this.config.host,
				port: parseInt(this.config.port) || 80,
				path,
				method: 'GET',
				timeout: 3000,
			}
			const req = http.request(options, (res) => {
				let data = ''
				res.on('data', (chunk) => (data += chunk))
				res.on('end', () => {
					try { resolve(JSON.parse(data)) }
					catch (e) { reject(new Error(`Invalid JSON from ${path}: ${data}`)) }
				})
			})
			req.on('error', reject)
			req.on('timeout', () => { req.destroy(); reject(new Error(`Timeout: ${path}`)) })
			req.end()
		})
	}

	async sendCommand(path) {
		try {
			await this.httpGet(path)
			this.log('debug', `Command sent: ${path}`)
		} catch (err) {
			this.log('error', `Command failed (${path}): ${err.message}`)
		}
	}

	// ─── Companion wiring ─────────────────────────────────────────────────────

	updateActions()           { UpdateActions(this) }
	updateFeedbacks()         { UpdateFeedbacks(this) }
	updateVariableDefinitions() { UpdateVariableDefinitions(this) }
}

runEntrypoint(ShellyMiniGen3, UpgradeScripts)

