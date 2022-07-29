const express = require('express');
const router = express.Router();

const Recipe = require('../database/recipe');

/* GET home page. */
router.get('/', async function(req, res ) {
    try {
        const data = await Recipe.find().sort({createdAt: -1}).limit(20);
        res.status(200).json(data);
    } catch (error) {
       res.status(400).json({  stauts: "Error", message: "Error", ...error});;
    }

});

router.post('/', async function(req, res, next) {
    const recipe = new Recipe(req.body);
    try {
        const data = await recipe.save()
        res.status(200).json(data);
    } catch (error) {
       res.status(400).json({  stauts: "Error", message: "Error", ...error});;
    }
})

router.get('/:id', async function(req, res, next) {
    try {
      const data = await Recipe.find({_id:req.params.id}).populate('expanded author');
        res.status(200).json(data);
    } catch (error) {
         res.status(400).json({  stauts: "Error", message: "Error", ...error});;
    }
})

router.delete('/:id', async function(req, res, next) {
    try {
        const detailId = await Recipe.find({_id:req.params.id}, {expanded:true});
        await Recipe.findByIdAndDelete(detailId[0].expanded);
        const data = await Recipe.findByIdAndDelete(req.params.id);
        res.status(200).json(data);
    } catch (error) {
         res.status(400).json({  stauts: "Error", message: "Error", ...error});;
    }
})

module.exports = router;