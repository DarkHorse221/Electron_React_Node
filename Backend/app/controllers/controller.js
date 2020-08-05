const Inquiry = require("../models/inquiry");
const Detail = require("../models/detail");

// Retrieve all Stock data from the database.
exports.findAllInquiry = async (req, res) => {
  try {
    const inquiries = await Inquiry.find();
    res.status(200).json({ inquiries }).end();
  } catch (err) {
    res.status(500).json({ status: "failure", message: err.message }).end();
  }
};

exports.findAllDetail = async (req, res) => {
  try {
    const details = await Detail.find();
    res.status(200).json({ details }).end();
  } catch (err) {
    res.status(500).json({ status: "failure", message: err.message }).end();
  }
};
