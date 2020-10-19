const express = require('express');
const bodyParser = require('body-parser');
const app = express();
require('dotenv').config();
const mongo= require('./src/database/mongo_db')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const Port = 5000;
app.listen(Port, () => {
    console.log(`Server Running on Port ${Port}`)
});
