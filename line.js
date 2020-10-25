const LINEBot = require('line-messaging')
require('dotenv').config({ path: require('find-config')('.env') })

const bot = LINEBot.Client({
  channelID: process.env.LINE_CHANNEL_ID,
  channelSecret: process.env.LINE_CHANNEL_SECRET,
  channelAccessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN
})

async function pushMessageToAllUsers(message) {
  const textMessageBuilder = new LINEBot.TextMessageBuilder(message);
  await bot.pushMessage(process.env.LINE_USER_ID_1, textMessageBuilder);
}

if (module === require.main) {
  pushMessageToAllUsers('hello')
}

module.exports = {
  pushMessageToAllUsers
}