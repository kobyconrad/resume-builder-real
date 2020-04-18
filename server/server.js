const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("listing on port 3000 (probably)");
});

app.get("/", (req, res) => {
  console.log("triggered GET on /");

  // this lets me send a GET request from diff domain, set to client domain later
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.end();
});

app.get("/download", (req, res) => {
  console.log("triggered GET on /download");
  console.log("youll DL a resume here later");

  // this lets me send a GET request from diff domain, set to client domain later
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.end();
});
