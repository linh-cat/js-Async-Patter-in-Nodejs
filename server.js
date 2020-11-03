const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const port = 5050;

const clothing = require("./server/route/clothing");
// const error = require("./server/route/error");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "dist")));

app.use("/api/clothing", clothing);
// app.use("/api/error", error);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/index.html"));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

module.exports = app;
