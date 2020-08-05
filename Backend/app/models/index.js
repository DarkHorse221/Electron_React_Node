const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.inquiry = require("./inquiry.js")(mongoose);
db.detail = require("./detail.js")(mongoose);

module.exports = db;
