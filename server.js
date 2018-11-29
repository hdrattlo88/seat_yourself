// // ----- NODE/EXPRESS SERVER DEPENDENCIES ----- //
// var express = require("express");
// var db = require("./app/models");


// // ----- INITIALIZES EXPRESS ----- //
// var app = express();
// var PORT = process.env.PORT || 8888;

// // Sets up the Express app to handle data parsing
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// // ----- REQURE MODELS FOR SYNCING ----- //
// (express.json());

// // ----- STATIC DIRECTORY ----- //
// app.use(express.static("app/public"));

// // ----- ROUTES ----- //
// require("./app/routes/api-routes.js")(app);

// // ----- SERVER LISTENING ----- //
// db.sequelize.sync().then(function () {
//     app.listen(PORT, function () {
//         console.log("APP LISTENING ON PORT " + PORT);
//     });
// });

// // ----- REQURE DATA PARSING ----- //
// app.use(express.urlencoded({ extended: true }));
// app.use



// *********************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// *********************************************************************************

// Dependencies
// =============================================================
var express = require("express");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8888;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory to be served
app.use(express.static("app/public"));

// Routes
// =============================================================
require("./app/routes/api-routes.js")(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
