const express = require('express');
const app = express();

const authController = require("../controllers/authController");

app
    .route("/")
    .get(authController.getHomepage)
    .post(authController.postHomepage);

module.exports = app;