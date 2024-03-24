const fs = require("node:fs/promises");
const path = require("path");
const { format } = require("date-fns");
const { v4: uuid } = require("uuid");

// Check if the logs directory exists when the script starts
fs.mkdir("logs").catch((err) => {
  if (err.code === "EEXIST") {
    console.log(`log directory already exists`);
  } else {
    console.error(`Error creating log directory: ${err}`);
  }
});

const logEvents = async (message, logName) => {
  const dateTime = `${format(new Date(), "ddMMyyyy\tHH:mm:ss")}`;
  const logItem = `${dateTime}\t${uuid()}\t${message}\n`;

  // Append the log message to the log file
  await fs.appendFile(path.join(__dirname, "logs", logName), logItem);
};