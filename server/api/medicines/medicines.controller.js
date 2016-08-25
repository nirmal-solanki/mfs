'use strict';

var _ = require('lodash');
var Medicines = require('./medicines.model');

// Get list of mediciness
exports.index = function(req, res) {
  Medicines.find(function (err, mediciness) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(mediciness);
  });
};

// Get a single medicines
exports.show = function(req, res) {
  Medicines.findById(req.params.id, function (err, medicines) {
    if(err) { return handleError(res, err); }
    if(!medicines) { return res.status(404).send('Not Found'); }
    return res.json(medicines);
  });
};

// Creates a new medicines in the DB.
exports.create = function(req, res) {
  Medicines.create(req.body, function(err, medicines) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(medicines);
  });
};

// Updates an existing medicines in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Medicines.findById(req.params.id, function (err, medicines) {
    if (err) { return handleError(res, err); }
    if(!medicines) { return res.status(404).send('Not Found'); }
    var updated = _.merge(medicines, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(medicines);
    });
  });
};

// Deletes a medicines from the DB.
exports.destroy = function(req, res) {
  Medicines.findById(req.params.id, function (err, medicines) {
    if(err) { return handleError(res, err); }
    if(!medicines) { return res.status(404).send('Not Found'); }
    medicines.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}