const mongoose = require("mongoose");
var schema = mongoose.Schema({
  symbol: { type: String },
  quantity: { type: Number },
  price: { type: Number },
  side: { type: String },
  group: { type: String },
});

const Inquiry = mongoose.model("inquiry", schema);
module.exports = Inquiry;
