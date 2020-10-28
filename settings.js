module.exports = {
	COINS: {
		BTC: {
			id: 'bitcoin',
			DROP_THRESH: 0.96, // 0.95
			RSI_THRESH: 35, //55
			RSI_PERIOD: 14
		},
		ETH: {
			id: 'ethereum',
			DROP_THRESH: 0.96, // 0.95
			RSI_THRESH: 35, //55
			RSI_PERIOD: 14
		},
		XRP: {
			id: 'ripple',
			DROP_THRESH: 0.96, // 0.95
			RSI_THRESH: 35, //55
			RSI_PERIOD: 14
		}
	},

	consecutiveDelayMinute: 90,
	noteFilePath: './lastAlertNote.json'
}

