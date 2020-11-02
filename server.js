const express = require('express');
const bodyParser = require('body-parser');
const app = express();
require('dotenv').config()
const mongo = require('./src/database/mongo_db');
const addProduct = require('./src/api/add_product');
const fetchProduct = require('./src/api/fetch_product');
const fetchProductById = require('./src/api/fetch_productById');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    next();
});


app.use('/api', addProduct);
app.use('/api', fetchProduct);
app.use('/api', fetchProductById);

const Port = 5000;
app.listen(Port, () => {
    console.log(`Server Running on Port ${Port}`)
});
try {
    mongo.connect();
} catch (err) {
    console.log('error while connecting database' + err);
}
