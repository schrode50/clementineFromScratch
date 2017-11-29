'use strict';

var express = require('express');
var app = express();
var mongoose = require('mongoose');
var routes = require(__dirname + '/app/routes/index');

const dbUrl = 'mongodb://localhost:27017/voteCounter';

const options = {
	useMongoClient: true
}

const db = mongoose.connect(dbUrl, options, function(err) {
	if (err) {
		throw new Error('Database failed to connect!');
	} else {
		console.log('MongoDB successfully connected on port 27017');
	}
	// console.log(mongoose.connection.readyState);
})

app.use('/public', express.static(__dirname + '/public'));
app.use('/controllers', express.static(__dirname + 'app/controllers'));

routes(app, db);

var server = app.listen(3000, () => console.log('up on ' + server.address().port));
