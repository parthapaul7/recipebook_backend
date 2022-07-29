const mongoose = require("mongoose");
const recipeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    expanded: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "recipe_detail",
    },
  },
  {
    timestamps: true,
  }
);

const recipes = mongoose.model('recipe', recipeSchema);

module.exports = recipes;