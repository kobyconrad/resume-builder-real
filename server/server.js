const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("listing on port 3000 (probably)");
});

app.get("/", (req, res) => {
  console.log("triggered GET on /");
  res.end();
});

app.get("/download", (req, res) => {
  console.log("triggered GET on /download");
  console.log("youll DL a resume here later");
  res.end();
});
