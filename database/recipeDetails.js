const mongoose = require("mongoose");
const recipeDetailSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    steps: [
      {
        stepsNo: Number,
        image: String,
        description: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const recipeDetials= mongoose.model("recipe_detail", recipeDetailSchema);

module.exports = recipeDetials;
