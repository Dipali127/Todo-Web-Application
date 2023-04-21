const mysql = require('mysql');

const connection =mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root@123mysql@#work**',
    databaseName:'dipadb'
})

module.exports = {connection};