const { hostname } = window.location;
const isDev = hostname === "localhost";

if (isDev) {
  module.exports = require("./dev");
} else {
  module.exports = require("./production");
}
