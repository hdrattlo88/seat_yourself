var db = require('../models')

module.exports = function(app) {
  // ----- GETS ALL RESERVATIONS ----- //
  app.get("/api/all", function(req, res) {
    db.guestInfo.findAll({})
      .then(function (dbguestInfo) {
        res.json(dbguestInfo);
    });
  })

  // ----- ADD RESERVATION ----- //
  app.post("/connection", function(req, res) {
    db.guestInfo
      .create({
        "resRestaurant": "Crazy Restaurant",
        "resMobile": "5008971000",
        "resAppetizer": "Muskrooms",
        "resTime": "1800",
        "resGuests": 4
      })
      .then(microservice => {
        res.json(microservice);
      });
});
};
