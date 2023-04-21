const express = require('express');
const app = express();
const conn = require('./database.js')

//const mysql = require('mysql');
//connection establish with mysql database
//createConnection is in the form of object which take four parameters
// const connection =mysql.createConnection({
//     host:'localhost',
//     user:'root',
//     password:'root@123mysql@#work**',
//     databaseName:'dipadb'
// })

const port = 3000;

app.listen(port,()=>{
    console.log("app listeining on port 3000");
    conn.connection.connect((err)=>{
        if(err)
        {
            console.log("error");
        }
        else{
            console.log("database connected");
        }
    })
})

