const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.status(200).json({
        title:"Veg omlate ",
        recipes:[
            {
                stepNo:1,
                title:"do this thing",
                image:"https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg",
                description:"do this thing",
            }
        ]

    })
});

module.exports = router;