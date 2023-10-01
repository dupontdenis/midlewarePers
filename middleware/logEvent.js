const { format } = require("date-fns");
const { v4: uuid } = require("uuid");

const fs = require("node:fs/promises");
const path = require("path");

const logEvents = async (message, logName) => {
  const dateTime = `${format(new Date(), "ddMMyyyy\tHH:mm:ss")}`;
  const logItem = `${dateTime}\t${uuid()}\t${message}\n`;

  try {
    await fs.mkdir("logs");
  } catch (err) {
    if (err.code !== "EEXIST") {
      console.error(err);
    }
  }

  await fs.appendFile(path.join(__dirname, "..", "logs", logName), logItem);
};

const logger = (req, res, next) => {
  logEvents(
    `| METHOD: ${req.method}\t| ORIGIN: ${req.headers.origin}\t| URL: ${req.url}`,
    `log.txt`
  );
  next();
};

module.exports = { logger, logEvents };
