const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const addCart = new Schema({
  cartName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  cost:{
      type: Number,
      required: true,
  }
}, {
  timestamps: true,
});

const Carts = mongoose.model('Cart', addCart);

module.exports = Carts;