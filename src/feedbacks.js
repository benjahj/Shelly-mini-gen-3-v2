const { combineRgb } = require('@companion-module/base')

/**
 * Register all Companion feedback definitions for the Shelly 1 Mini Gen3 module.
 * @param {import('./main').ShellyMiniGen3} self
 */
module.exports = function (self) {
	self.setFeedbackDefinitions({
		relay_on: {
			name: 'Relay is ON',
			type: 'boolean',
			label: 'Relay is ON',
			defaultStyle: {
				bgcolor: combineRgb(0, 200, 0),
				color: combineRgb(255, 255, 255),
			},
			options: [],
			callback: () => {
				return self.relayState === true
			},
		},

		relay_off: {
			name: 'Relay is OFF',
			type: 'boolean',
			label: 'Relay is OFF',
			defaultStyle: {
				bgcolor: combineRgb(200, 0, 0),
				color: combineRgb(255, 255, 255),
			},
			options: [],
			callback: () => {
				return self.relayState === false
			},
		},

		button_pressed: {
			name: 'Button is Currently Pressed',
			type: 'boolean',
			label: 'Button is Currently Pressed',
			defaultStyle: {
				bgcolor: combineRgb(255, 140, 0),
				color: combineRgb(0, 0, 0),
			},
			options: [],
			callback: () => {
				return self.buttonPressActive === true
			},
		},
	})
}

