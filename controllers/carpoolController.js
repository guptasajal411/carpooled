const User = require('../models/userModel');

exports.postNewCarpool = function(req, res){
    User.findOne({ username: req.body.username }, async function(err, foundUser){
        if(err){
            res.send(err);
        } else {
            foundUser.carMembers.push({ username: req.body.username });
            await foundUser.save();
            User.find({}, function(err, users){
                if(err) {
                    res.send(err);
                } else {
                    res.redirect("/");
                }
            });
        }
    });
}