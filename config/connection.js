//Dependecies
// Create MySQL connection
var mysql = require("mysql");
var coloring = require('coloring');

var connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "Alessandro2015",
  database: "burgers_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("Connected ID:" + coloring.green(coloring.bold(connection.threadId)));
});

// Export connection for our ORM to use.
module.exports = connection;

mysql://b6a1919e835123:2a3b3a52@us-cdbr-iron-east-05.cleardb.net/heroku_7020a910d781eb0?reconnect=true