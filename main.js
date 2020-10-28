const fs = require('fs')
const track = require('./track')
const line = require('./line')
const settings = require('./settings')

function loadLastAlertNote() {
  if(fs.existsSync(settings.noteFilePath)){
    const strData = fs.readFileSync(settings.noteFilePath)
    return JSON.parse(strData)
  } else {
    return {}
  }
}

function saveLastAlertNote(noteObj) {
  const strData = JSON.stringify(noteObj)
  fs.writeFileSync(settings.noteFilePath, strData)
}

async function main() {
  const lastAlertNote = loadLastAlertNote();
  Object.keys(settings.COINS).forEach(coinSym => {
    if(!(coinSym in lastAlertNote)) {
      lastAlertNote[coinSym] = new Date(0).getTime()
    }
  })

  for(const coinSymbol in settings.COINS) {
    console.log('. Fetching market data for', coinSymbol)
    const coinSettings = settings.COINS[coinSymbol]
    const result = await track.evaluateMarket(coinSettings)
    const minuteSinceLastAlert = Math.floor((Date.now() - lastAlertNote[coinSymbol])/60000)

    if(minuteSinceLastAlert < settings.consecutiveDelayMinute) {
      console.log('. Delay alert to prevent frequent alarm', settings.consecutiveDelayMinute - minuteSinceLastAlert, 'minutes until available')
    } else if (result) {
      const { latest, percent, rsi, time } = result
      console.log('. Latest price ->', latest)
      console.log('. Percent drop from peak ->', percent.toFixed(3))
      console.log('. RSI value ->', Math.round(rsi))
      console.log('. Latest data time ->', time)

      let message = `Good time to buy ${coinSymbol}\n\n`
      message += `Latest price \n-> ${latest.toFixed(2)} USD\n\n`
      message += `Percent drop from peak \n-> ${(percent*100).toFixed(1)}%\n\n`
      message += `RSI-14\n-> ${Math.round(rsi)}`
      await line.pushMessageToAllUsers(message)
      lastAlertNote[coinSymbol] = Date.now()
      saveLastAlertNote(lastAlertNote)
    }
    console.log()
  }

}

main()
