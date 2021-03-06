var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = {

    index: function(req, res){
        User.find({}, function(badbad, goodgood){
            if (badbad){
                res.json({message: "Error in index", error: badbad})
            }
            else{
                res.json({message: "Success in index", friends: goodgood})
            }
        })
    },

    find: function (req, res) {
        User.find(function(err, data){
            if(err) { console.log(err); }
            else { res.json(data); }
        })
    },
    create: function (req, res) {
        User.find(req.body, function (err, data){
            if(err) { console.log(err) }
            if(data.length) { res.json(data[0]); }
            else {
                User.create(req.body, function (err, data){
                    if(err) { console.log(err); }
                    if(data) {res.json(data); }
                })
            }
        })
    },
}

