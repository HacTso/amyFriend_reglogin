// here we load the Quote model that we created on the server.js page

console.log('server/config/routes.js working!');

var friends = require('../controllers/friends.js');
var users = require('../controllers/users.js');
const path = require('path');

module.exports = function(app) {
  
  app.get('/friends', function(req, res) {
    friends.index(req, res);
  });

  app.get('/friends/:id', function(req, res){
    friends.show(req, res);
  });

  app.post('/friends', function(req,res){
    console.log("The request body:", req.body);
    friends.create(req, res);
  });

  app.put('/friends/:id', function(req, res){
    friends.update(req, res);
  });

  app.delete('/friends/:id', function (req, res) {
    friends.delete(req, res);
  });

  app.post('/users', function(req, res){
    users.create(req, res)
  })

  app.get('/users', function(req, res) {
    users.index(req, res);
  });

  app.get('*',(req, res) => {
    res.sendFile(path.resolve('public/dist/index.html'));
  });
}









