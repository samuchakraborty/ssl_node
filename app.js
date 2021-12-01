// import "https";

const express = require("express");
const https = require("https");
const path = require("path");
const fs = require("fs");

const app = express();

const PORT = process.env.PORT || 4343;

app.get("/api", (req, res) => {
  console.log("////");
  res.send("<h1>Samu Chakraborty</>");
});

const sslServer = https.createServer(
  {
    key: fs.readFileSync(path.join(__dirname, "cert", "key.pem")),
    cert: fs.readFileSync(path.join(__dirname, "cert", "cert.pem")),
  },
  app
);

sslServer.listen(PORT, () => {
  console.log("Secure Server is starting at " + PORT);
});

// app.listen(PORT, (req, res) => {
//   console.log("server is starting " +PORT);
// });
