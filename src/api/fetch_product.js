const express = require('express');
const router = express.Router();
const mongo = require('../database/mongo_db');

router.get('/fetch_products', (req, res) => {
    const FilterCondition = {};

    mongo.findDocuments('products', FilterCondition)
        .then(data => res.status(200).json(data))
        .catch(err => res.status(404).json(err));
});

module.exports = router;
