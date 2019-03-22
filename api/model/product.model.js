const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Product = new Schema({
  title: {
    type: String
  },
  likes: {
    type: Number
  },
  dislikes: {
    type: Number
  }
},{
    collection: 'product'
});

module.exports = mongoose.model('Product', Product);