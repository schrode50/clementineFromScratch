'use strict';

var express = require('express');
var routes = require(__dirname + '/app/routes/index');
var app = express();

app.use('/public', express.static(__dirname + '/public'));
app.use('controllers', express.static(__dirname + 'app/controllers'));

routes(app);

app.listen(3000, () => console.log('Listening on 3000'));