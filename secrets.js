require('dotenv').config({ path: __dirname + '/.env' })

const secrets = {
	line: {
		channelID: process.env.LINE_CHANNEL_ID,
		channelSecret: process.env.LINE_CHANNEL_SECRET,
		channelAccessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN,
	},
	userIds: [],
}

const numUsers = parseInt(process.env.LINE_NUM_USERS)
for(let i = 1; i <= numUsers; i++) {
	secrets.userIds.push(process.env['LINE_USER_ID_'+i])
}

if(module == require.main) {
	console.log(secrets)
}

module.exports = secrets
