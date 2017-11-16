//Dependecies
var mysql = require("mysql");
var coloring = require('coloring');

var connection;

//  Heroku Deployment
if (process.env.JAWSDB_WHITE_URL){
  connection = mysql.createConnection(process.env.JAWSDB_WHITE_URL);
  connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("Connected ID:" + coloring.green(coloring.bold(connection.threadId)));
  });
} 
else {
//  Local Deployment
  connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "Alessandro2015",
    database: "burgers_db"
  });
  connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("Connected ID:" + coloring.green(coloring.bold(connection.threadId)));
  });
}


// Export connection for our ORM to use.
module.exports = connection;