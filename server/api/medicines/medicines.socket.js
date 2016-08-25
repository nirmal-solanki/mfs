/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Medicines = require('./medicines.model');

exports.register = function(socket) {
  Medicines.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Medicines.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('medicines:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('medicines:remove', doc);
}