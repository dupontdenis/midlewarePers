const express = require("express");
const app = express();
const { logger } = require("./middleware/logEvent");

app.use(logger);

app.get("/", (req, res) => {
  res.send("Check the log.txt file in Logs directory !");
});

app.listen("3000", () => console.log("http://localhost:3000"));
