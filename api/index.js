require("dotenv").config();
const express = require("express");
const appRouter = require("./routes");
const { connectDb } = require("../db");

const app = express();

app.use(express.json());

app.use("/api", appRouter);

app.use(function (err, req, res, next) {
  console.error(err.stack);
  if (err.name === "CastError") {
    return res.status(400).send({ error: "malformatted id" });
  }
  res.status(500).send("Could not process request!");
});

(async () => {
  await connectDb();
})();

module.exports = app;
