'use strict';

var express = require('express');
var routes = require(__dirname + '/app/routes/index');
var mongo = require('mongodb').MongoClient;

var app = express();

mongo.connect('mongodb://localhost:27017/clementinejs', function (err, db) {
	if (err) {
		throw new Error('Database failed to connect!');
	} else {
		console.log('MongoDB successfully connected on port 27017.');
	}

app.use('/public', express.static(__dirname + '/public'));
app.use('/controllers', express.static(__dirname + 'app/controllers'));

routes(app, db);

app.listen(3000, () => console.log('Listening on 3000'));

});

