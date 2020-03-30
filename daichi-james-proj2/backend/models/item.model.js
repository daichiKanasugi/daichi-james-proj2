const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const addItem = new Schema({
  itemName: {
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

const Item = mongoose.model('Item', addItem);

module.exports = Item;