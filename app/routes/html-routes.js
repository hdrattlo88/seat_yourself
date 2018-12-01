// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  $.get("*", function(req, res) {
    res.render(path.join(__dirname, "../public/index.html"));
  });
};