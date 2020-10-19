const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const Port = 5000;
app.listen(Port, () => {
    console.log(`Server Running on Port ${Port}`)
});
