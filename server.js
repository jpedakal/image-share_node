const express = require('express');
const bodyParser = require('body-parser');
const app = express();
require('dotenv').config();
const mongo = require('./src/database/mongo_db');
const addProduct = require('./src/api/add_product');
const fetchProduct = require('./src/api/fetch_product');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api', addProduct);
app.use('/api', fetchProduct);

const Port = 5000;
app.listen(Port, () => {
    console.log(`Server Running on Port ${Port}`)
});
try {
    mongo.connect();
} catch (err) {
    console.log('error while connecting database');
}
