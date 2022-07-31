const express = require("express");
const router = express.Router();
const recipeDetails = require("../database/recipeDetails");
const path = require('path');
const multer = require("multer");

/* GET home page. */
router.get("/:id", async function (req, res, next) {
  try {
    const data = await recipeDetails.find({ _id: req.params.id });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
});
const storage = multer.diskStorage({
  destination:"uploads",
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now()
    cb(null, file.fieldname + '-' + uniqueSuffix+file.originalname)
  }
})

const upload = multer({ storage: storage })
// const upload = multer({ dest: "uploads"});

router.post("/", upload.single("images"), async function (req, res, next) {
  console.log(req.file);
//   const recipe = new recipeDetails(req.body);
  try {
    // const data = await recipe.save()
    // upload.array('photos')
    res.status(200).json({});
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/get_image/:id", async function (req, res, next) {
    const rootdir = path.join(__dirname,"../");
  res.sendFile(path.join(rootdir,"uploads",req.params.id));
});

module.exports = router;
