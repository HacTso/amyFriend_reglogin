
// Friend MODEL

console.log('server/models/friend.js starting!');
var mongoose = require('mongoose');

var FriendSchema = new mongoose.Schema(
    {
    first_name: {type: String, required: true, minlength: 3},
    last_name: {type: String, required: true, minlength: 3},
    birthday: {type: Date, required: true}
    },    
    {timestamps: true}
    );

var Friend = mongoose.model('Friend', FriendSchema);//model name: Friend; push data "TO" database!

