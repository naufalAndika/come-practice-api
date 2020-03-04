const express = require('express')
require('./db/mongoose')
const companyRouter = require('./routes/company')
const userRouter = require('./routes/user')

const app = express()

app.use(express.json())
app.use(companyRouter)
app.use(userRouter)

module.exports = app
