const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

// converst a buffer/binary into a json object
app.use(bodyParser.json());

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

app.post("/buildResume", (req, res) => {
  console.log("triggered POST");
  console.log(req.body);

  fs.writeFile(`${__dirname}/resume.json`, JSON.stringify(req.body), (err) => {
    if (err) throw err;
    console.log("resume file has been written");
  });

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.end();
});
