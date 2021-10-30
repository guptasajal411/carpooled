const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect("mongodb+srv://" + process.env.usernameMongoDB + ":" + process.env.password + "@cluster0.xgjts.mongodb.net/carpoolDB");

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    totalSeats: Number,
    availableSeats: Number,
    carMembers: [{
        username: String
    }]
});

const User = new mongoose.model("User", userSchema);

module.exports = User;