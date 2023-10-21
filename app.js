require('dotenv').config()
const express = require('express')
const jwt = require('jsonwebtoken')
const router = require('./src/router')

const app = express()
//config JSON response
app.use(express.json())


// App Routes Config
app.use(router)








module.exports = app