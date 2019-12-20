const open = require("open");

require("./proxy");
require("./api");

(async () => {
  await open("http://localhost:3000/public/");
})();
