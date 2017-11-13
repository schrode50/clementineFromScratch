'use strict';

const mongoose = require('mongoose');

const ClickCountModel = new mongoose.Schema({
  typeId: 'string',
  count: 'number'
});

module.exports = mongoose.model('ClickCounter', ClickCountModel, 'clickCount');
// ^^model, schema, collection^^^
