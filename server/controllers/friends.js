
// VARIABLES

console.log("server/controller/friends.js operating!");
var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');//IMPORTANT for getFriend(); getting data "FROM" database


module.exports = {
  // PART 1
  index: function(req, res){
    Friend.find({}, function(badbad, goodgood){
      if (badbad){
        res.json({message: "Error in index", error: badbad})
      }
      else{
        res.json({message: "Success in index", friends: goodgood})
      }
    })
  },
  // PART 2
  create: function(req, res){
    Friend.create(req.body, function(err, output){
      if (err){
        res.json({message: "Error in creating", error: err})
      }
      else {
        res.json({message: "Success in creating", friend: output})
      }
    })
  },
  // PART 3
  update: function(req, res){
    Friend.update(req.body, function(err, output){
      if (err) {
        res.json({message: "Error in updating", error: err})
      }
      else {
        res.json({message: "Success in updating", friend: output})
      }
    })
  },
  // PART 4
  delete: function(req, res){
    Friend.remove({_id: req.params.id})
    .then((data) => {
      res.json({message: "Success in deleting"})
    })
    .catch((err) => {
      res.json({message: "Error in deleing", error: err})
    })
  },
  // PART 5
  show: function(req, res){
    // console.log(req.params.id) //for debugging
    Friend.findOne({_id: req.params.id}) //invoke a function of promise which can be called any by getting data "Friend" from database 
    .then((friend) => {     //friend is the attribute of data getting from database
      // console.log("The friend:", friend); // for debugging
      res.json({message: "Success in showing", friend: friend}) //passing the data "friend" to service 
    })
    .catch((err) => {
      res.json({message: "Error in showing", error: err})
    })
  }
}