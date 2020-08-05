const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const db = require("./app/models");
const Inquiry = require("./app/models/inquiry");
const Detail = require("./app/models/detail");
const inquiryData = require("./app/models/sample/inquiry.json");
const detailData = require("./app/models/sample/detail.json");

// var KafkaRest = require("kafka-rest");
// var kafka = new KafkaRest({
//   url: "https://psrc-l7y22.us-east-2.aws.confluent.cloud:9092",
// });

// var KafkaRest = require("kafka-rest");
// var kafka = new KafkaRest({ url: "http://localhost:8082" });

// console.log("start");

// kafka.topics.list(function (err, topics) {
//   for (var i = 0; i < topics.length; i++) console.log(topics[i].toString());
// });

// console.log("end");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database!");
    saveJson();
    // app.use("/api", routes);
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

async function saveJson() {
  try {
    await Inquiry.create(inquiryData);
    await Detail.create(detailData);
    console.log("Done!");
    // process.exit();
  } catch (e) {
    console.log(e);
    // process.exit();
  }
}

app.all("*", function (req, res, next) {
  console.log("Congratulations, you are in a secret area!");
  res.header("Access-Control-Allow-origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "accept, origin, X-Requested-With, content-type, token, access_token,userId"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  res.header("Content-Type", "application/json;charset=utf-8");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

app.get("/", (req, res, next) => {
  res.status(200).json({ status: "success", message: "Api is working" }).end();
});

app.use(require("./app/routes"));

// set port, listen for requests
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
