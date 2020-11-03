const express = require("express");
const fs = require("fs");
const dataFile = "server/data/clothing.json";
const router = express.Router();

// Get all clothing

router.get("/", function (req, res) {
  getDataClothing()
    .then((data) => {
      console.log("Return dat in  browser.");
      res.send(data);
    })
    .catch((err) => res.status(500).send(err))
    .finally(() => console.log("All done processing promise"));
});

function getDataClothing() {
  return new Promise((resolve, reject) => {
    fs.readFile(dataFile, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        let clothingData = JSON.parse(data);
        resolve(clothingData);
      }
    });
  });
}

module.exports = router;
