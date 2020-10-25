const track = require('./track')

async function main() {
  console.log('. Fetching market data')
  const result = await track.evaluateMarket()
  if (result) {
    const { latest, percent, rsi, time } = result
    console.log('. Latest price ->', latest)
    console.log('. Percent drop from peak ->', percent.toFixed(3))
    console.log('. RSI value ->', Math.round(rsi))
    console.log('. Latest data time ->', time)
  }
}

main()