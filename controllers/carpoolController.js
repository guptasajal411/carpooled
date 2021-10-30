const User = require('../models/userModel');

exports.postNewCarpool = function(req, res){
    User.findOne({ username: req.body.username }, function(err, foundUser){
        if(err){
            res.send(err);
        } else {
            foundUser.carMembers.push({ username: req.body.username });
            User.find({}, function(err, users){
                if(err) {
                    res.send(err);
                } else {
                    res.render("carpool", { user: foundUser, allUsers: users });
                }
            });
        }
    });
}