// ----- SETS UP MYSQL CONNECTION ----- //
var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "go_seat_yourself",
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});
if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);

}else{
  connection=mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: 'hacktheplanet',
    database: 'todoagain_db'
  });

};
// ----- MAKES CONNECTION ----- //
connection.connect(function(err) {
  if (err) {
    console.error("ERROR CONNECTING: " + err.stack);
    return;
  }
  console.log("CONNECTED AS ID: " + connection.threadId + "YOU ARE FUCKING CONNECTED!!!");
});

// ----- EXPORTS CONNECTION ----- //
module.exports = connection;