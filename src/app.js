const express = require('express')
require('./db/mongoose')
const companyRouter = require('./routes/company')

const app = express()

app.use(express.json())
app.use(companyRouter)

module.exports = app
