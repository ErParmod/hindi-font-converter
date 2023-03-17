function parse_body_data(req) {
  const unicode = req.body.unicode ?? req.body.text ?? "";
  const raw = req.body.raw ?? req.query.raw ?? false;
  const format = req.body.format ?? req.query.format ?? "json";
  return [unicode, raw, format];
}

function set_headers(response, type = "json") {
  // Set response headers
  if (type === "plain") {
    response.setHeader("Content-Type", "text/plain");
  } else if (type === "html") {
    response.setHeader("Content-Type", "text/html");
  } else {
    response.setHeader("Content-Type", "application/json");
  }
}

function data_missing(response, generate = true) {
  if (generate) {
    response.status(400).json({
      error: true,
      message: "Required data is missing.",
    });
  }
}

function api_success_response(response, format, data, message = "Success") {
  if (format === "plain") {
    response.status(code).send(data);
  } else {
    response.status(200).json({
      success: true,
      message: message,
      data: data,
    });
  }
}

module.exports = {
  parse_body_data,
  set_headers,
  data_missing,
  api_success_response,
};
