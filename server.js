'use strict';

var express = require('express');
var routes = require(__dirname + '/app/routes/index');
var app = express();

routes(app);

app.listen(3000, () => console.log('Listening on 3000'));