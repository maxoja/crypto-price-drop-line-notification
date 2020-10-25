const LINEBot = require('line-messaging')
require('dotenv').config({ path: require('find-config')('.env') })

const bot = LINEBot.Client({
  channelID: process.env.LINE_CHANNEL_ID,
  channelSecret: process.env.LINE_CHANNEL_SECRET,
  channelAccessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN
})

async function pushMessageToAllUsers(message) {
  const textMessageBuilder = new LINEBot.TextMessageBuilder(message);
  const numUsers = parseInt(process.env.LINE_NUM_USERS)
  for (let i = 1; i <= numUsers; i++) {
    const userId = process.env['LINE_USER_ID_' + i]
    console.log('.. Push message to', userId)
    await bot.pushMessage(userId, textMessageBuilder)
  }
}

if (module === require.main) {
  pushMessageToAllUsers('hello test')
}

module.exports = {
  pushMessageToAllUsers
}