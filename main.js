const track = require('./track')
const line = require('./line')

async function main() {
  console.log('. Fetching market data')
  const result = await track.evaluateMarket()
  if (result) {
    const { latest, percent, rsi, time } = result
    console.log('. Latest price ->', latest)
    console.log('. Percent drop from peak ->', percent.toFixed(3))
    console.log('. RSI value ->', Math.round(rsi))
    console.log('. Latest data time ->', time)

    let message = 'Good time to buy\n\n'
    message += `Latest price \n-> ${latest.toFixed(2)} USD\n\n`
    message += `Percent drop from peak \n-> ${percent.toFixed(1)}%\n\n`
    message += `RSI-14\n-> ${Math.round(rsi)}`
    await line.pushMessageToAllUsers(message)
  }
}

main()