/**
 * Bitfocus Companion – Shelly 1 Mini Gen3 module
 *
 * Features:
 *   - Relay on/off/toggle
 *   - Read button press state from the device input
 *   - Polling for live status feedback
 *
 * Shelly Gen3 RPC endpoints used (all via HTTP GET):
 *   Switch.Set       → /rpc/Switch.Set?id=0&on=true|false
 *   Switch.Toggle    → /rpc/Switch.Toggle?id=0
 *   Switch.GetStatus → /rpc/Switch.GetStatus?id=0
 *   Input.GetStatus  → /rpc/Input.GetStatus?id=0
 */

const { InstanceBase, runEntrypoint, InstanceStatus, combineRgb } = require('@companion-module/base')

const DEFAULT_PORT = 80

class ShellyMiniGen3Instance extends InstanceBase {
	switchStatus = { output: false }
	inputStatus = { state: false }
	pollTimer = null

	async init(config) {
		this.config = config
		this.updateStatus(InstanceStatus.Ok)
		this.initVariables()
		this.initActions()
		this.initFeedbacks()
		this.startPolling()
	}

	async destroy() {
		this.stopPolling()
	}

	async configUpdated(config) {
		this.config = config
		this.stopPolling()
		this.updateStatus(InstanceStatus.Ok)
		this.initVariables()
		this.initActions()
		this.initFeedbacks()
		this.startPolling()
	}

	getConfigFields() {
		return [
			{
				type: 'textinput',
				id: 'host',
				label: 'IP Address',
				width: 6,
				default: '192.168.1.100',
				regex: '/^[w.]+$/',
			},
			{
				type: 'number',
				id: 'port',
				label: 'Port',
				width: 3,
				default: DEFAULT_PORT,
				min: 1,
				max: 65535,
			},
			{
				type: 'number',
				id: 'pollingInterval',
				label: 'Status polling interval (ms, 0 = disabled)',
				width: 4,
				default: 1000,
				min: 0,
				max: 60000,
			},
		]
	}

	async shellyRpc(method, params = {}) {
		const host = this.config.host || '127.0.0.1'
		const port = this.config.port || DEFAULT_PORT
		const query = new URLSearchParams(params).toString()
		const url = `http://${host}:${port}/rpc/${method}?${query}`

		try {
			const controller = new AbortController()
			const timeoutId = setTimeout(() => controller.abort(), 5000)
			const response = await fetch(url, { signal: controller.signal })
			clearTimeout(timeoutId)
			if (!response.ok) throw new Error(`HTTP ${response.status}`)
			return await response.json()
		} catch (err) {
			this.log('error', `Shelly RPC error [${method}]: ${err.message}`)
			this.updateStatus(InstanceStatus.ConnectionFailure, err.message)
			throw err
		}
	}

	startPolling() {
		const interval = this.config.pollingInterval ?? 1000
		if (interval > 0) {
			this.pollTimer = setInterval(() => this.pollStatus(), interval)
		}
	}

	stopPolling() {
		if (this.pollTimer) {
			clearInterval(this.pollTimer)
			this.pollTimer = null
		}
	}

	async pollStatus() {
		try {
			const [switchRes, inputRes] = await Promise.all([
				this.shellyRpc('Switch.GetStatus', { id: '0' }),
				this.shellyRpc('Input.GetStatus', { id: '0' }),
			])

			this.switchStatus = { output: !!switchRes.output }
			this.inputStatus = { state: !!inputRes.state }

			this.updateStatus(InstanceStatus.Ok)
			this.updateVariableValues()
			this.checkFeedbacks('relay_is_on', 'button_pressed')
		} catch (_) {
			// error already logged in shellyRpc()
		}
	}

	initActions() {
		this.setActionDefinitions({

			relay_on: {
				name: 'Relay – On',
				options: [],
				callback: async () => {
					await this.shellyRpc('Switch.Set', { id: '0', on: 'true' })
					this.switchStatus.output = true
					this.updateVariableValues()
					this.checkFeedbacks('relay_is_on')
				},
			},

			relay_off: {
				name: 'Relay – Off',
				options: [],
				callback: async () => {
					await this.shellyRpc('Switch.Set', { id: '0', on: 'false' })
					this.switchStatus.output = false
					this.updateVariableValues()
					this.checkFeedbacks('relay_is_on')
				},
			},

			relay_toggle: {
				name: 'Relay – Toggle',
				options: [],
				callback: async () => {
					await this.shellyRpc('Switch.Toggle', { id: '0' })
					this.switchStatus.output = !this.switchStatus.output
					this.updateVariableValues()
					this.checkFeedbacks('relay_is_on')
				},
			},
		})
	}

	initVariables() {
		this.setVariableDefinitions([
			{ variableId: 'relay_state', name: 'Relay State (ON/OFF)' },
			{ variableId: 'button_state', name: 'Button State (PRESSED/RELEASED)' },
		])
		this.updateVariableValues()
	}

	updateVariableValues() {
		this.setVariableValues({
			relay_state: this.switchStatus.output ? 'ON' : 'OFF',
			button_state: this.inputStatus.state ? 'PRESSED' : 'RELEASED',
		})
	}

	initFeedbacks() {
		this.setFeedbackDefinitions({

			relay_is_on: {
				name: 'Relay is ON',
				type: 'boolean',
				defaultStyle: {
					bgcolor: combineRgb(0, 200, 0),
					color: combineRgb(0, 0, 0),
				},
				options: [],
				callback: () => this.switchStatus.output,
			},

			button_pressed: {
				name: 'Button is Pressed',
				type: 'boolean',
				defaultStyle: {
					bgcolor: combineRgb(255, 200, 0),
					color: combineRgb(0, 0, 0),
				},
				options: [],
				callback: () => this.inputStatus.state,
			},
		})
	}
}

runEntrypoint(ShellyMiniGen3Instance, [])
