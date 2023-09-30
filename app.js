const logEvents = require("./logEvent");

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const logNames = ["root", "API", "TMP"];

setInterval(async () => {
  await logEvents(
    `message from ${logNames[getRandomArbitrary(0, logNames.length)]}`,
    logNames[getRandomArbitrary(0, logNames.length)]
  );
}, Math.ceil(Math.random() * 10000));
