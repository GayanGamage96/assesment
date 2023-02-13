const express = require('express');
var bodyParser = require('body-parser');
var connection = require("./database");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.get('/customer', (req, res) => {
    connection.query('SELECT * FROM customer', (err, rows) => {
        if (err) throw err
        res.json(rows)
    })
})

app.post('/customer', (req, res) => {
    connection.query('INSERT INTO customer VALUES(?,?,?,?,?,?,?,?,?,?,?,?)', [req.body.id,req.body.name, req.body.address, req.body.email, req.body.dateOfBirth, req.body.gender, req.body.age, req.body.cardHolderName, req.body.cardNumber, req.body.expiryDate, req.body.cvv,req.body.time], (err, rows) => {
        if (err) throw err
        res.json(rows)
    }
    )
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})