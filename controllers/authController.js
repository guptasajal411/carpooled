const md5 = require('md5');
const User = require('../models/userModel');

exports.getHomepage = function(req, res){
    res.render("homepage");
}

exports.postHomepage = function(req, res){
    User.findOne({username: req.body.username}, async function(err, foundUser){
        if (err){
            res.send(err);
        } else {
            if (foundUser == null){
                console.log("user not found, creating new user");
                const newUser = new User({
                    username: req.body.username,
                    password: md5(req.body.password)
                });
                await newUser.save();
                console.log("user saved");
                res.redirect('/');
            } else {
                console.log("user found");
                if (foundUser.password == md5(req.body.password)){
                    User.find({}, function(err, users){
                        if(err) {
                            res.send(err);
                        } else {
                            res.render("carpool", { user: foundUser, allUsers: users });
                        }
                    });
                } else {
                    res.send("auth unsuccessful");
                }
            }
        }
    });
}