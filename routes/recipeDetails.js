const express = require("express");
const router = express.Router();
const recipeDetails = require("../database/recipeDetails");
const path = require('path');
const multer = require("multer");

const baseImgUrl = "https://bezen-backend.herokuapp.com/recipe_details/get_image/" 

/* GET home page. */
router.get("/:id", async function (req, res, next) {
  try {
    const data = await recipeDetails.find({ _id: req.params.id });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/", async function (req, res, next) {
  const recipe = new recipeDetails(req.body);
  try {
    const data = await recipe.save()
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
});


// image upload setup
const storage = multer.diskStorage({
  destination:"uploads",
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now()
    cb(null, file.fieldname + '-' + uniqueSuffix+(file.originalname).replace(/\s/g, ""))
  }
})

const upload = multer({ storage: storage })

router.post("/upload_img", upload.single("images"), async function (req, res, next) {
  try {
    res.status(200).json({image:baseImgUrl+req?.file?.filename});
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/get_image/:id", async function (req, res, next) {
    const rootdir = path.join(__dirname,"../");
  res.sendFile(path.join(rootdir,"uploads",req.params.id));
});

module.exports = router;
