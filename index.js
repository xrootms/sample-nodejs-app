const express = require("express");
require("dotenv").config();
const app = express();

const path = require("path");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/public/login.html", {
    apiKey: process.env.SAWO_API_KEY,
  });
});

app.get("/success", (req, res) => {
  res.sendFile(__dirname + "/public/success.html");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});

