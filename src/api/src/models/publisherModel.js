const mongoose = require('mongoose');

const {Schema} = mongoose;

const publisherModel = new Schema({})

module.exports = mongoose.model('publishers', publisherModel);