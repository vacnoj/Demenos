const express = require('express')
const connection = require('./connection')
const app = express()
const port = 3000

console.log(__dirname)

app.use(express.static('public'))

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// Routes

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
})

app.get('/flights', (req, res) => {
    res.sendFile(__dirname + "/public/flights.html")
})

app.get('/payment', (req, res) => {
    res.sendFile(__dirname + "/public/payment.html")
})

app.get('/login', (req, res) => {
    res.sendFile(__dirname + "/public/login.html")
})

// Creates

app.post("/api/add_customer", function(req, res) {
    console.log("Querying database")
    console.log(req.body)
    connection.query("INSERT INTO Customer (first_name, last_name, email, password, created_date) VALUES (?,?,?,?,?)", 
        [req.body.first_name, 
            req.body.last_name, 
            req.body.email, 
            req.body.password, 
            req.body.created_date
        ] ,
        function(err, result) {
        if (err) {
            console.log(err)
            return res.status(500).end()
        }
        console.log("Customer Created")
        res.status(200).end()
    })
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})