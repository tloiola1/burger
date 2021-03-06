//Dependencies
var connection = require('./connection.js');

var orm = {
	all: function(table, callback){
		console.log("Table: "+ table);
		var queryString = 'SELECT * FROM ' + table +';';
		connection.query(queryString, function(err, result){
			// if (err) {
   //      	throw err;
   //    	}
			console.log(result);
			callback(result);
		});
	},
	update: function(table, state, id, callback){
		
		var queryString = 'UPDATE '+ table +' SET devoured = ' + state.devoured + ' WHERE '+ id +';';
		console.log(queryString);
		connection.query(queryString, function(err, result){
			if (err) {
        	throw err;
      	}
			console.log(result);
			callback(result);
		});
	},
	create: function(table, cols, vals, callback) {
		console.log('ORM: ' + table);
		console.log('ORM: ' + cols);
		console.log('ORM: ' + vals);

		var burger_name = "'"+ vals[0] + "'";
		var devoured = vals[1];

		console.log('ORM: ' + burger_name);
		console.log('ORM: ' + devoured);

		var queryString = "INSERT INTO " + table;

		queryString += " (";
		queryString += cols.toString();
		queryString += ") ";
		queryString += "VALUES (";
		queryString += burger_name;
		queryString += ", ";
		queryString += devoured;
		queryString += ") ";

		console.log(queryString);

		connection.query(queryString, function(err, result) {
			if (err) {
		    	throw err;
		  	}

		  	callback(result);
		});
	}
};

module.exports = orm;