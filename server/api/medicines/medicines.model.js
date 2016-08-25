'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var MedicinesSchema = new Schema({
  name: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Medicines', MedicinesSchema);