const express = require('express');
const router = express.Router();

const mongo = require('../../database/mongo_db');

router.post('/add_product', (req, res) => {

    const payload = req.body;

    mongo.insertDocuments('products', payload)
        .then(data => res.status(200).json(data))
        .catch(err => res.json(err));

});


module.exports = router;