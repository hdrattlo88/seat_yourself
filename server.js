var express = require("express");
var app = express();
var PORT = process.env.PORT || 8888;
var db = require('./app/models')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("app/public"));

require("./app/routes/api-routes")(app);

db.sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
})
