const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const uni_kruti = require("./utils/convertor/uni_kruti");
const utils = require("./utils/utils");

const app = express();
const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `);
});

app.get("/", (req, res) => {
  res.send("Hurry! API is working 🥳");
});

app.post("/api/unicode-to-krutidev", (req, res) => {
  [unicode, raw, format, max_chuck_size] = utils.parse_body_data(req);
  utils.set_headers(res, format);
  utils.data_missing(res, unicode === "");

  //process unicode text to krutidev_10 fonts
  const krutidev_10 = uni_kruti.unicode_to_krutidev_10(unicode, max_chuck_size);

  //generate response
  utils.api_success_response(
    res,
    format,
    format === "plain"
      ? krutidev_10
      : { unicode: unicode, krutidev_10: krutidev_10 },
    "Data from Unicode to Krutidev_10 converted successfully."
  );
});

app.post("/api/krutidev-to-unicode", (req, res) => {
  [raw_text, raw, format, max_chuck_size] = utils.parse_body_data(req);
  utils.set_headers(res, format);
  utils.data_missing(res, raw_text === "");

  //process krutidev_10 text to unicode fonts
  const proccessed_text = uni_kruti.kruti_to_unicode(raw_text, max_chuck_size);

  //generate response
  utils.api_success_response(
    res,
    format,
    format === "plain"
      ? proccessed_text
      : {
          input_text: raw_text,
          output_text: proccessed_text,
        },
    "Data from Krutidev_10 to Unicode converted successfully."
  );
});

app.get("/about", (req, res) => {
  utils.set_headers(res);
  res.json({
    message: "Hindi Font Converter API",
    version: utils.pkg_version,
    repository: "https://github.com/ErParmod/unicode-font-api",
    developer: "https://github.com/hemant-kr-meena",
  });
});

// Export the Express API
module.exports = app;
