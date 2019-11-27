const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String, 
    required: true
  },
  price: {
    type: mongoose.Types.Decimal128,
    required: true
  }
});

module.exports = Book = mongoose.model('book', BookSchema);