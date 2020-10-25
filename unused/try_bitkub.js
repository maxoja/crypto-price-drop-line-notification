const Bitkub = require('bitkub')
const client = new Bitkub({
  api_key: process.env.BITKUB_API_KEY,
  api_secret: process.env.BITKUB_API_SECRET,
})

client.server_time().then(server_time => {
  console.log(server_time)
})