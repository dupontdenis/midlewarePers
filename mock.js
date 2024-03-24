// for testing the logger middleware function
// need a new terminal window and run the following command:
// node mock.js

const { logger } = require("./middleware/logEvent");

// Create a mock request object
const req = {
  method: "GET",
  headers: {
    origin: "http://example.com", // Replace with the origin you want to test
  },
  url: "/test",
};

// Create a mock response object
const res = {};

// Create a mock next function
const next = () => {};

// Call the logger function with the mock request and response
logger(req, res, next);
