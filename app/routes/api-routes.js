
// ----- DEPENDENCIES ----- //
// var app = express();

var connection = require("../config/connection.js");
// var db = require("../config/connection.js");

// var newReservation = require("../public/js/reservation");
// ----- ROUTES ----- //
module.exports = function(app) {
  // ----- GETS ALL RESERVATIONS ----- //
  app.get("/api/all", function(req, res) {//was all
    var dbQuery = "SELECT * FROM go_seat_yourself";//was guestInfo
   
    connection.query(dbQuery, function(err, result) {
      if (err) throw err;
      res.json(result);
    });
  });

  // ----- ADD RESERVATION ----- //
  app.post("/connection", function(req, res) {//was guestInfo
    console.log("Reservation Data");
    console.log(req.body);
  //   // create takes an argument of an object describing the item we want to
  //   // insert into our table. In this case we just we pass in an object with a text
  //   // and complete property (req.body)
  //   db.create({
  //     resRestaurant: req.body.resRestaurant, // ##### ANDY>>>> This is where it is getting hung up. Says undefined.
  //     resMobile: req.body.resMobile,
  //     resAppetizer: req.body.resAppetizer,
  //     resTime: req.body.resTime,
  //     resGuests: req.body.resGuests,
  //   }).then(function(dbguestInfo) {
  //     // We have access to the new todo as an argument inside of the callback function
  //     res.json(dbguestInfo);
  //   });
  //  });
var dbQuery = "INSERT INTO guestInfo (resRestaurant, resMobile, resAppetizer, resTime, resGuests) VALUES (?,?,?,?,?)";
    // var newReservation = "INSERT INTO guestInfo (resRestaurant, resMobile, resAppetizer, resTime, resGuests) VALUES (?,?,?,?,?)";

    connection.query(dbQuery, [req.body.resRestaurant, req.body.resMobile, req.body.resAppetizer, req.body.resTime, req.body.resGuests], function(err, result) {
      if (err) throw err;
      console.log("RESERVATION MADE!");
      res.end();
    });
});
  };
