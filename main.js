/**
 * Bitfocus Companion - Shelly 1 Mini Gen3 module
 * Features: Relay on/off/toggle, button impulse detection, polling
 */

const { InstanceBase, runEntrypoint, InstanceStatus, combineRgb } = require('@companion-module/base')

const DEFAULT_PORT = 80

class ShellyMiniGen3Instance extends InstanceBase {
	switchStatus = { output: false }
	inputStatus = { state: false }
	_lastInputState = false
	_buttonPressCount = 0
	_impulseTimer = null
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
		if (this._impulseTimer) clearTimeout(this._impulseTimer)
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
			{ type: 'textinput', id: 'host', label: 'IP Address', width: 6, default: '192.168.1.100' },
			{ type: 'number', id: 'port', label: 'Port', width: 3, default: DEFAULT_PORT, min: 1, max: 65535 },
			{ type: 'number', id: 'pollingInterval', label: 'Polling interval (ms, 0=disabled)', width: 4, default: 300, min: 0, max: 60000 },
		]
	}

	async shellyRpc(method, params = {}) {
		const host = this.config.host || '127.0.0.1'
		const port = this.config.port || DEFAULT_PORT
		const query = new URLSearchParams(params).toString()
		const url = 'http://' + host + ':' + port + '/rpc/' + method + '?' + query
		try {
			const controller = new AbortController()
			const timeoutId = setTimeout(() => controller.abort(), 5000)
			const response = await fetch(url, { signal: controller.signal })
			clearTimeout(timeoutId)
			if (!response.ok) throw new Error('HTTP ' + response.status)
			return await response.json()
		} catch (err) {
			this.log('error', 'Shelly RPC error [' + method + ']: ' + err.message)
			this.updateStatus(InstanceStatus.ConnectionFailure, err.message)
			throw err
		}
	}
	startPolling() {
		const interval = this.config.pollingInterval ?? 300
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
			const newState = !!inputRes.state
			// Impulse detection: rising edge (false -> true)
			if (newState && !this._lastInputState) {
				this._buttonPressCount++
				this.inputStatus = { state: true }
				if (this._impulseTimer) clearTimeout(this._impulseTimer)
				this._impulseTimer = setTimeout(() => {
					this.inputStatus = { state: false }
					this.updateVariableValues()
					this.checkFeedbacks('button_pressed')
				}, 500)
			}
			this._lastInputState = newState
			this.updateStatus(InstanceStatus.Ok)
			this.updateVariableValues()
			this.checkFeedbacks('relay_is_on', 'button_pressed')
		} catch (_) {}
	}

	initActions() {
		this.setActionDefinitions({
			relay_on: { name: 'Relay - On', options: [], callback: async () => {
				await this.shellyRpc('Switch.Set', { id: '0', on: 'true' })
				this.switchStatus.output = true
				this.updateVariableValues()
				this.checkFeedbacks('relay_is_on')
			}},
			relay_off: { name: 'Relay - Off', options: [], callback: async () => {
				await this.shellyRpc('Switch.Set', { id: '0', on: 'false' })
				this.switchStatus.output = false
				this.updateVariableValues()
				this.checkFeedbacks('relay_is_on')
			}},
			relay_toggle: { name: 'Relay - Toggle', options: [], callback: async () => {
				await this.shellyRpc('Switch.Toggle', { id: '0' })
				this.switchStatus.output = !this.switchStatus.output
				this.updateVariableValues()
				this.checkFeedbacks('relay_is_on')
			}},
			reset_press_count: { name: 'Reset Button Press Counter', options: [], callback: async () => {
				this._buttonPressCount = 0
				this.updateVariableValues()
			}},
		})
	}

	initVariables() {
		this.setVariableDefinitions([
			{ variableId: 'relay_state', name: 'Relay State (ON/OFF)' },
			{ variableId: 'button_impulse', name: 'Button Impulse (TAP/idle)' },
			{ variableId: 'button_press_count', name: 'Button Press Count' },
		])
		this.updateVariableValues()
	}

	updateVariableValues() {
		this.setVariableValues({
			relay_state: this.switchStatus.output ? 'ON' : 'OFF',
			button_impulse: this.inputStatus.state ? 'TAP' : 'idle',
			button_press_count: String(this._buttonPressCount),
		})
	}

	initFeedbacks() {
		this.setFeedbackDefinitions({
			relay_is_on: { name: 'Relay is ON', type: 'boolean', defaultStyle: { bgcolor: combineRgb(0, 200, 0), color: combineRgb(0, 0, 0) }, options: [], callback: () => this.switchStatus.output },
			button_pressed: { name: 'Button Impulse Detected', type: 'boolean', defaultStyle: { bgcolor: combineRgb(255, 200, 0), color: combineRgb(0, 0, 0) }, options: [], callback: () => this.inputStatus.state },
		})
	}
}

runEntrypoint(ShellyMiniGen3Instance, [])
