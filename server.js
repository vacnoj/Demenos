const express = require('express')
const connection = require('./connection')
const app = express()
const port = 3000

console.log(__dirname)

app.use(express.static('public'))

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
})

app.get('/flights', (req, res) => {
    res.sendFile(__dirname + "/public/flights.html")
})

  app.get('/payment', (req, res) => {
    res.sendFile(__dirname + "/public/payment.html")
})

app.post("/api/customer", function(req, res) {
    console.log(req.body)
    // connection.query("INSERT INTO customer (firt_name, last_name, birthday, card_number, card_expiration_date, cvv, name_on_card) VALUES (?,?,?,?,?,?,?,?)", req.body.first_name)
    // connection.query("INSERT INTO customer (firt_name VALUES (?)", req.body.first_name, function(err, result) {
    //     if (err) {
    //         return res.status(500).end()
    //     }
    //     res.status(200).end()
    // })
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})