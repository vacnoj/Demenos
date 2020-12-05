const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

console.log(__dirname)

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"))
})

app.get('/flights', (req, res) => {
    res.sendFile(path.join(__dirname + "/flights.html"))
})

  app.get('/payment', (req, res) => {
    res.sendFile(path.join(__dirname + "/payment.html"))
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})