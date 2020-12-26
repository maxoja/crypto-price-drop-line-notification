module.exports = {
	COINS: {
		BTC: {
			id: 'bitcoin',
			DROP_THRESH: 0.95,
			RSI_THRESH: 35, //55
			RSI_PERIOD: 14
		},
		ETH: {
			id: 'ethereum',
			DROP_THRESH: 0.93,
			RSI_THRESH: 35, //55
			RSI_PERIOD: 14
		}
	},

	windowSizeInDays: 1,
	consecutiveDelayMinute: 600,
	noteFilePath: './lastAlertNote.json'
}

