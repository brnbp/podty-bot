const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

app.get('/', (req, res) => res.send('done'));

app.post('/webhook', (req, res) => res.send(req.body));

app.listen(process.env.PORT || 3000)
