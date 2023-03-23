const app = require("./app");
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`API listening on PORT http://localhost:${PORT} `);
});
// Export the Express API
module.exports = app;
