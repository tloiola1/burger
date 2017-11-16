//Dependecies
// Create MySQL connection
var mysql = require("mysql");
var coloring = require('coloring');

var pool = mysql.createPool({
  connectionLimit: 100,
  host: "us-cdbr-iron-east-05.cleardb.net",
  user: "b6a1919e835123",
  password: "2a3b3a52",
  database: "heroku_7020a910d781eb0",
  debug: "false"
});

// Make connection.
pool.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("Connected ID:" + coloring.green(coloring.bold(connection.threadId)));
});

// Export connection for our ORM to use.
module.exports = pool;

// mysql://b6a1919e835123:2a3b3a52@us-cdbr-iron-east-05.cleardb.net/heroku_7020a910d781eb0?reconnect=true