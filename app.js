const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const usersRouter = require('./routes/users');
require("./database/connectDb");
const app = express();


// view engine setup

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use('/users', usersRouter);
app.use('/recipes', require('./routes/recipes'));
app.use('/recipe_details', require('./routes/recipeDetails'));


// error handler
app.use("*" ,function(err, req, res, next) {
  // render the error page
  res.status(err.status || 500);
  res.json({status:"Error" , message: "does not exits"});
});

module.exports = app;
