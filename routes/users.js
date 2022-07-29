const express = require("express");
const router = express.Router();
const md5 = require("md5");
const User = require("../database/users");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/signup", async function (req, res, next) {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: md5(req.body.password),
  });

  // no need to check for unique cause mongoose schema will do it for us
  try {
    const data = await user.save();
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({  stauts: "Error", message: "email already exists", ...error});;
  }
});


router.post("/login", async function (req, res, next) {
  // no need to check for unique cause mongoose schema will do it for us
  try {
    const data = await User.find({
      email: req.body.email,
      password: md5(req.body.password),
    });
    if (data.length > 0) {
      res.status(200).json(data);
      return;
    }
    res
      .status(400)
      .json({ status: "Error", message: "Invalid email or password" });
  } catch (error) {
    res.status(200).json(error);
  }
});

module.exports = router;
