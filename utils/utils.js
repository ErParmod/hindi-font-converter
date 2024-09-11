const pjson = require("./../package.json");

function parse_body_data(req) {
  const unicode = req.body.unicode ?? req.body.text ?? "";
  const raw = req.body.raw ?? req.query.raw ?? false;
  const format = req.body.format ?? req.query.format ?? "json";
  //max char limit to proccess
  const max_chuck_size = req.body.chuck_size ?? req.query.chuck_size ?? 10000;
  if (max_chuck_size < 0) {
    max_chuck_size = 10000;
  }

  return [unicode, raw, format, max_chuck_size];
}

function set_headers(response, type = "json") {
  // Set response headers
  if (type === "plain" || type === "text") {
    response.setHeader("Content-Type", "text/plain");
  } else if (type === "html") {
    response.setHeader("Content-Type", "text/html");
  } else {
    response.setHeader("Content-Type", "application/json");
  }
}


function api_error_response(res, message = "", code = 500) {
  res.status(code).json({
    error: true,
    message: message,
  });
}

function api_success_response(response, format, data, message = "Success") {
  if (format === "plain") {
    response.status(200).send(data);
  } else {
    response.status(200).json({
      success: true,
      message: message,
      data: data,
    });
  }
}

function is_valid_to_font(to_font, allowed_font = "") {
  return allowed_font.includes(to_font);
}

function version() {
  return pjson.version;
}

module.exports = {
  parse_body_data,
  set_headers,
  api_success_response,
  version,
  pjson,
  api_error_response,
  is_valid_to_font,
};
