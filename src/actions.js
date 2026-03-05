/**
 * Register all Companion action definitions for the Shelly 1 Mini Gen3 module.
 * @param {import('./main').ShellyMiniGen3} self
 */
module.exports = function (self) {
	self.setActionDefinitions({
		relay_on: {
			name: 'Relay - Turn ON',
			options: [],
			callback: async () => {
				await self.sendCommand('/rpc/Switch.Set?id=0&on=true')
				// Optimistic update — polling will confirm
				self.relayState = true
				self.setVariableValues({ relay_state: 'on' })
				self.checkFeedbacks('relay_on', 'relay_off')
			},
		},

		relay_off: {
			name: 'Relay - Turn OFF',
			options: [],
			callback: async () => {
				await self.sendCommand('/rpc/Switch.Set?id=0&on=false')
				self.relayState = false
				self.setVariableValues({ relay_state: 'off' })
				self.checkFeedbacks('relay_on', 'relay_off')
			},
		},

		relay_toggle: {
			name: 'Relay - Toggle',
			options: [],
			callback: async () => {
				await self.sendCommand('/rpc/Switch.Toggle?id=0')
				// Do not assume the new state — let the next poll update it
			},
		},
	})
}

