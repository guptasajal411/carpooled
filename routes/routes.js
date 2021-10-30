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

app
    .route("/joinCarpool")
    .post(carpoolController.postJoinCarpool);

app
    .route("/leaveCarpool")
    .post(carpoolController.postLeaveCarpool);

app
    .route("/deleteCarpool")
    .post(carpoolController.postDeleteCarpool);

module.exports = app;