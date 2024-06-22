const connString = require('./credentials.js').mongo.connectionString; //--Load credentials file into const connString, then use connectionString property of mongo object
const mongoose = require('mongoose');//--Load mongoose into constant mongoose

const connectDB = function(blnOpen){
	if (blnOpen) { //If true, open database connection
		mongoose.connect(connString)
			.then( //Callback functions
				function() { //Success
					let conn = mongoose.connection;
					console.log(`Database is connected on ${new Date().toLocaleString()}: ${conn.host}:${conn.port} @ ${conn.name}`);
				},
				function(err) { //Error
					console.log("Problem while connecting database " + err);
				}
			)
	} else { //Close connection
		mongoose.connection.close()
			.then( //Callback functions
				function() { //Success
					console.log(`MongoDB connection closed on ${new Date().toLocaleString()}`);
				}, function(err) { //Error
					console.log("Problem while closing database " + err);
				}
			)			
	}
}
module.exports = connectDB;//--Export function connectDB