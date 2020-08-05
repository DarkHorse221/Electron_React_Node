const mongoose = require("mongoose");
var schema = mongoose.Schema({
  symbol: { type: String },
  open: { type: Number },
  high: { type: Number },
  ratio: { type: Number },
  dividend: { type: Number },
});

const Detail = mongoose.model("detail", schema);
module.exports = Detail;
