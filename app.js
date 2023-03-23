const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const ApiRoutes = require("./routes/api");
const WebRoutes = require("./routes/web");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", WebRoutes);
app.use("/api/", ApiRoutes);

// Export the Express API
// module.exports = app;

module.exports = app;
