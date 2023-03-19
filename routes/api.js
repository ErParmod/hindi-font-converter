const express = require("express");
const router = express.Router();
const uni_kruti = require("./../converter/uni_kruti");
const utils = require("./../utils/utils");

router.get("/", (req, res) => {
  console.log(req.headers);
});

router.post("/unicode-krutidev", (req, res) => {
  [input_text, raw, format, max_chuck_size] = utils.parse_body_data(req);
  utils.set_headers(res, format);
  utils.data_missing(res, input_text === "");
  const to_font = req.body.to_font ?? "krutidev";
  //process input fonts
  switch (to_font) {
    case "krutidev":
      output_text = uni_kruti.unicode_to_krutidev_10(
        input_text,
        max_chuck_size
      );
      break;
    case "unicode":
      output_text = uni_kruti.kruti_to_unicode(input_text, max_chuck_size);
      break;
  }

  //generate response
  const response = {
    status: true,
    message: `Text converted to ${to_font} successfully.`,
    data: {
      input_text: input_text,
      output_text: output_text,
    },
  };

  res.status(200).send(format === "json" ? response : response.data.input_text);
});

router.post("/unicode-to-krutidev", (req, res) => {
  [input_text, raw, format, max_chuck_size] = utils.parse_body_data(req);
  utils.set_headers(res, format);
  utils.data_missing(res, input_text === "");

  //process unicode text to krutidev_10 fonts
  const output_text = uni_kruti.unicode_to_krutidev_10(
    input_text,
    max_chuck_size
  );

  //generate response
  const response = {
    status: true,
    message: "Data from Unicode to Krutidev converted successfully.",
    data: {
      input_text: input_text,
      output_text: output_text,
    },
  };
  res.status(200).send(format === "json" ? response : response.data.input_text);
});

router.post("/krutidev-to-unicode", (req, res) => {
  [input_text, raw, format, max_chuck_size] = utils.parse_body_data(req);
  utils.data_missing(res, input_text === "");
  utils.set_headers(res, format);

  //process krutidev_10 text to unicode fonts
  const output_text = uni_kruti.kruti_to_unicode(input_text, max_chuck_size);

  //generate response
  const response = {
    status: true,
    message: "Data from Krutidev to Unicode converted successfully.",
    data: {
      input_text: input_text,
      output_text: output_text,
    },
  };
  res.status(200).send(format === "json" ? response : response.data.input_text);
});

module.exports = router;
