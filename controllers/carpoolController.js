const User = require('../models/userModel');

exports.postNewCarpool = function(req, res){
    User.findOne({ username: req.body.username }, async function(err, foundUser){
        if(err){
            res.send(err);
        } else {
            foundUser.carMembers.push({ username: req.body.username });
            await foundUser.save();
            res.redirect("/");
        }
    });
}

exports.postJoinCarpool = function(req, res){
    // console.log(req.body)
    User.findOne({ username: req.body.carOwnerName }, async function(err, foundUser){
        foundUser.carMembers.push({ username: req.body.username });
        await foundUser.save();
        res.redirect("/");
    });
}