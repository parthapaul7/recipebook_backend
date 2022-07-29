const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true }).then(() => {
    console.log("Connected to MongoDB");
}, (err) => {
    console.log("Error connecting to MongoDB: ", err);
});

const Recipe = require("./recipe");

// let recipe = new Recipe({
//     title: "Veg omlate",
//     image: "https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg",
//     description: "do this thing",
// });

// recipe.save().then(data=>{
//     console.log(data)
// })

// Recipe.find({title:"Veg mlate"}).then(data => {
//     console.log(data);
// });

