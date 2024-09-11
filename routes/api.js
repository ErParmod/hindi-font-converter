const express = require("express");
const router = express.Router();
const uni_kruti = require("./../converter/uni_kruti");
const uni_chankya = require("./../converter/uni_chanakya");
const utils = require("./../utils/utils");

router.get("/", (req, res) => {
  res.status(404).send("Not Found");
});

/**
 * Unicode to KrutiDev Convertion API
 */

router.post("/unicode-krutidev", (req, res) => {
  [input_text, raw, format, max_chuck_size] = utils.parse_body_data(req);
  utils.set_headers(res, format);

  if (input_text === "") {
    return utils.api_error_response(res, "Required data is missing.", 400);
  }

  const to_font = req.body.to_font ?? "krutidev";
  if (utils.is_valid_to_font(to_font, "unicode-mangal-krutidev") !== true) {
    return utils.api_error_response(
      res,
      "invalid convertion target.(Invalid to_font value.)"
    );
  }
  //process input fonts
  switch (to_font) {
    case "krutidev":
      output_text = uni_kruti.unicode_to_krutidev_10(
        input_text,
        max_chuck_size
      );
      break;
    case "unicode":
    case "mangal":
    default:
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

  res
    .status(200)
    .send(format === "json" ? response : response.data.output_text);
});

router.post("/unicode-to-krutidev", (req, res) => {
  [input_text, raw, format, max_chuck_size] = utils.parse_body_data(req);

  utils.set_headers(res, format);

  if (input_text === "") {
    return utils.api_error_response(res, "Required data is missing.", 400);
  }

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
  res
    .status(200)
    .send(format === "json" ? response : response.data.output_text);
});

router.post("/krutidev-to-unicode", (req, res) => {
  [input_text, raw, format, max_chuck_size] = utils.parse_body_data(req);

  utils.set_headers(res, format);

  if (input_text === "") {
    return utils.api_error_response(res, "Required data is missing.", 400);
  }

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
  res
    .status(200)
    .send(format === "json" ? response : response.data.output_text);
});

/**
 * Unicode to Chankya Convertion API
 */

router.post("/unicode-chankya", (req, res) => {
  [input_text, raw, format, max_chuck_size] = utils.parse_body_data(req);
  utils.set_headers(res, format);

  if (input_text === "") {
    return utils.api_error_response(res, "Required data is missing.", 400);
  }

  const to_font = req.body.to_font ?? "chankya";
  if (utils.is_valid_to_font(to_font, "unicode-mangal-chankya") !== true) {
    return utils.api_error_response(
      res,
      "invalid convertion target.(Invalid to_font value.)"
    );
  }
  //process input fonts
  switch (to_font) {
    case "chankya":
      output_text = uni_chankya.unicode_to_chankya(input_text, max_chuck_size);
      break;
    case "unicode":
    case "mangal":
    default:
      output_text = uni_chankya.chanakya_to_unicode(input_text, max_chuck_size);
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

  res
    .status(200)
    .send(format === "json" ? response : response.data.output_text);
});

router.post("/unicode-to-chankya", (req, res) => {
  [input_text, raw, format, max_chuck_size] = utils.parse_body_data(req);

  utils.set_headers(res, format);

  if (input_text === "") {
    return utils.api_error_response(res, "Required data is missing.", 400);
  }

  //process krutidev_10 text to unicode fonts
  const output_text = uni_chankya.unicode_to_chankya(input_text);

  //generate response
  const response = {
    status: true,
    message: "Data from Unicode to Chankya converted successfully.",
    data: {
      input_text: input_text,
      output_text: `${output_text}`,
    },
  };
  res
    .status(200)
    .send(format === "json" ? response : response.data.output_text);
});

router.post("/chankya-to-unicode", (req, res) => {
  [input_text, raw, format, max_chuck_size] = utils.parse_body_data(req);

  utils.set_headers(res, format);

  if (input_text === "") {
    return utils.api_error_response(res, "Required data is missing.", 400);
  }

  //process krutidev_10 text to unicode fonts
  const output_text = uni_chankya.chanakya_to_unicode(input_text);

  //generate response
  const response = {
    status: true,
    message: "Data from Chankya to Unicode converted successfully.",
    data: {
      input_text: input_text,
      output_text: `${output_text}`,
    },
  };
  res
    .status(200)
    .send(format === "json" ? response : response.data.output_text);
});

module.exports = router;
