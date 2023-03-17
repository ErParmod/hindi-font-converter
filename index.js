// index.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const convert = require("./utils/utils");
const pjson = require("./package.json");

const app = express();
const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `);
});

app.get("/", (req, res) => {
  res.send("Hey this is my API running 🥳");
});

app.post("/api/uni2kruti", (req, res) => {
  const unicode = req.body.unicode ?? false;
  const raw = req.body.raw ?? req.query.raw ?? false;
  const format = req.body.format ?? req.query.format ?? "json";

  // Set response headers
  if (format === "plain") {
    res.setHeader("Content-Type", "text/plain");
  } else {
    res.setHeader("Content-Type", "application/json");
  }
  if (unicode === false) {
    res.status(400).json({
      error: true,
      message: "Required data is missing.",
    });
  }
  if (raw) {
    res.status(200).send(convert.convert_to_Kritidev_010(unicode));
  } else {
    res.status(200).json({
      message: "Unicode to Kruti Dev 10 Converted",
      unicode: unicode,
      krutidev: convert.convert_to_Kritidev_010(unicode),
    });
  }
});

app.get("/about", (req, res) => {
  res.json({
    message: "This is Unicode2Kruti API",
    version: pjson.version,
    version: pjson.version,
    developer: "https://github.com/hemant-kr-meena",
  });
});

// Export the Express API
module.exports = app;
