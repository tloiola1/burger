//Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var coloring = require('coloring');

var port = process.env.PORT || 8080;

var app = express();

app.use(express.static('public'));

app.use(bodyParser());

//Set handlebars
var expHbs = require('express-handlebars');

app.engine('handlebars', expHbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Import routes to access server
require('./controllers/burgers_controllers.js')(app);


app.listen(port); 

console.log('Listened Port:'+ coloring.green(coloring.bold(port)));