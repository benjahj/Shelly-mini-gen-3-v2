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
			name: 'Input / Button State (on/off)',
		},
		{
			variableId: 'button_press',
			name: 'Button Press Impulse (1 for ~500 ms after press, then 0)',
		},
		{
			variableId: 'press_counter',
			name: 'Button Press Counter (increments on each press)',
		},
	])
}

