const express = require('express');
const app = express();
app.use(express.json());
const conn = require('./database.js')

const port = 3000;

app.listen(port,()=>{
    console.log("app listeining on port 3000");
    conn.sequelize
})

