const mongoose = require("mongoose");

const supplySchema = new mongoose.Schema({
  item: String,
  quantity: Number,
  price: Number
});

module.exports = mongoose.model("Supply", supplySchema);