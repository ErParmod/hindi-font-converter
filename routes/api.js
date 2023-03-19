const express = require("express");
const router = express.Router();
const uni_kruti = require("./../converter/uni_kruti");
const utils = require("./../utils/utils");

router.get("/", (req, res) => {
  console.log(req.headers);
});

router.post("/unicode-to-krutidev", (req, res) => {
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
      : {
          input_text: unicode,
          output_text: krutidev_10,
        },
    "Data from Unicode to Krutidev_10 converted successfully."
  );
});

router.post("/krutidev-to-unicode", (req, res) => {
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

module.exports = router;
