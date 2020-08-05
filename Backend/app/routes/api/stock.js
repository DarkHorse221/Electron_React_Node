const router = require("express").Router();

const stockController = require("../../controllers/controller");

router.get("/getinquiry", stockController.findAllInquiry);
router.get("/getdetail", stockController.findAllDetail);

module.exports = router;
