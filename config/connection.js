var mysql = require('mysql');

var connection = mysql.createConnection(process.env.JAWSDB_WHITE_URL);

connection.connect();

