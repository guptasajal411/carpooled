const express = require('express');
const app = express();

const authController = require("../controllers/authController");
const carpoolController = require("../controllers/carpoolController");

app
    .route("/")
    .get(authController.getHomepage)
    .post(authController.postHomepage);

app
    .route("/newCarpool")
    .post(carpoolController.postNewCarpool);

module.exports = app;