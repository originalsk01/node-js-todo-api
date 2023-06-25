const express = require("express");

const db = require("./data/database");

const app = express();

app.use(function (error, req, res, next) {
  res.status(500).json({
    message: "Something went wrong!",
  });
});

db.initDb()
  .then(() => {
    app.listen(3000);
  })
  .catch(() => {
    console.log("Connecting to the database failed!");
  });
