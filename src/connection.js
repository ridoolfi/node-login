const mysql = require('mysql2')
require('dotenv').config()

const HOST = process.env.HOST
const USER = process.env.dbUSER
const PASSWORD = process.env.dbPASS
const DATABASE = process.env.BD
const DB_PORT = process.env.DB_PORT
const connection = mysql.createConnection({
    host: HOST,
    user: USER,
    password: PASSWORD,
    database: DATABASE,
    port: DB_PORT
})
module.exports = connection

