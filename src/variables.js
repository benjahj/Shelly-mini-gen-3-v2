/**
 * Register all Companion variable definitions for the Shelly 1 Mini Gen3 module.
 * @param {import('./main').ShellyMiniGen3} self
 */
module.exports = function (self) {
	self.setVariableDefinitions([
		{
			variableId: 'relay_state',
			name: 'Relay State (on/off)',
		},
		{
			variableId: 'input_state',
			name: 'Input State (on/off)',
		},
	])
}

