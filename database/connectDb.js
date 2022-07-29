const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true }).then(() => {
    console.log("Connected to MongoDB");
}, (err) => {
    console.log("Error connecting to MongoDB: ", err);
});

const Recipe = require("./recipe");

