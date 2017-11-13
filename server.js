'use strict';

var express = require('express');
var app = express();
var mongoose = require('mongoose');
var routes = require(__dirname + '/app/routes/index');

const dbUrl = process.env.MONGODB_URI || 'mongodb://localhost/dev_db';

const options = {
	useMongoClient: true
}

const db = mongoose.connect(dbUrl, options, function(err) {
	if (err) {
		throw new Error('Database failed to connect!');
	} else {
		console.log('MongoDB successfully connected on port 27017.');
	}
	console.log(mongoose.connection.readyState);
})

app.use('/public', express.static(__dirname + '/public'));
app.use('/controllers', express.static(__dirname + 'app/controllers'));

routes(app, db);

app.listen(process.env.PORT || 3000, () => console.log('up on ' + (process.env.PORT || 3000)));
