const mongoose = require('mongoose');

const {Schema} = mongoose;

const authorModel = new Schema({});

module.exports = mongoose.model('authors', authorModel);