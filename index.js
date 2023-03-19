const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const ApiRoutes = require("./routes/api");
const WebRoutes = require("./routes/web");
const PORT = 4000;

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", WebRoutes);
app.use("/api/", ApiRoutes);

app.listen(PORT, () => {
  console.log(`API listening on PORT http://localhost:${PORT} `);
});

// Export the Express API
module.exports = app;
