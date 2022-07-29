const express = require('express');
const router = express.Router();
const recipeDetails= require('../database/recipedetails');

/* GET home page. */
router.get('/:id', async function(req, res, next) {
    try {
     const data = await recipeDetails.find({_id:req.params.id})
     res.status(200).json(data)
        
    } catch (error) {
     res.status(500).json(error)
    }
});

router.post('/', async function(req, res, next) {
    const recipe = new recipeDetails(req.body);
    try {
        const data = await recipe.save()
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error)
    }
})


module.exports = router