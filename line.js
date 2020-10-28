const LINEBot = require('line-messaging')
const secrets = require('./secrets')

const bot = LINEBot.Client(secrets.line)

async function pushMessageToAllUsers(message) {
  const textMessageBuilder = new LINEBot.TextMessageBuilder(message);
  secrets.userIds.forEach(userId => { 
    console.log('.. Push message to', userId)
    bot.pushMessage(userId, textMessageBuilder)
  })
}

if (module === require.main) {
  pushMessageToAllUsers('hello test')
}

module.exports = {
  pushMessageToAllUsers
}
