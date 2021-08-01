const mongoose = require('mongoose');

const {Schema} = mongoose;

const bookModel = new Schema({
    
});

module.exports = mongoose.model('books', bookModel);
