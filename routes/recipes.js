const express = require('express');
const router = express.Router();
const Recipe = require('../database/recipe');

/* GET home page. */
router.get('/', async function(req, res, next) {
    try {
     const data = await Recipe.find();
     res.status(200).json(data)
        
    } catch (error) {
     res.status(500).json(error)
    }
});

module.exports = router