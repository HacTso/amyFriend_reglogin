// require express

const	port = 8000,
		express = require("express"),
		bodyParser = require('body-parser'),
		mongoose = require('./server/config/mongoose.js'),
		path = require("path"),
		app = express();
	
// Set up body-parser to parse form data
app.use(bodyParser.urlencoded({ extended: true }));
// for json data
app.use(bodyParser.json());
// angular
app.use(express.static(path.join(__dirname, '/public/dist')));

// store the function in a variable
var routes = require('./server/config/routes.js')(app);
// invoke the function stored in routes_setter and pass it the "app" variable

// tell the express app to listen on port 8000
app.listen(port, function() {
	console.log("listening on port ", port);
});



