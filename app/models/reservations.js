var Sequelize = require("sequelize");
// ----- DATABASE CONNECTION REFERENCE ----- //
var sequelize = require("../config/connection.js");
// ----- CREATES RESERVATION MODEL TO MATCH DB ----- //

// module.exports = function(sequelize, resRestaurant, resMobile, resAppetizer, resTime, resGuests) {
// var Reservations = sequelize.define("guestInfo", {
//   id: {
//     type: Sequelize.INTEGER,
//     autoIncrement: true,
//     primaryKey: true
//   },
//   resRestaurant: Sequelize.INTEGER,
//   resMobile: Sequelize.STRING,
//   resAppetizer: Sequelize.STRING,
//   resTime: Sequelize.STRING,
//   resGuests: Sequelize.INTEGER
// });

// Reservations.associate = function(models) {
//     onDelete: "cascade"
// };
// return Reservations;
// };

// // const Sequelize = require("sequelize");
// // // ----- DATABASE CONNECTION REFERENCE ----- //
// // const sequelize = require("../config/connection.js");
   
// // // ----- CREATES RESERVATION MODEL TO MATCH DB ----- //

// // module.exports = function (sequelize, resRestaurant, resMobile, resAppetizer, resTime, resGuests) {
// //     var guestInfo = sequelize.define("guestInfo", {
// //         id: {
// //             type: Sequelize.INTEGER,
// //             autoIncrement: true,
// //             primaryKey: true
// //         },
// //         resRestaurant: {
// //             type: Sequelize.STRING
// //         },
// //         resMobile: {
// //             type: Sequelize.STRING
// //         },
// //         resAppetizer: {
// //             type: Sequelize.STRING
// //         },
// //         resTime: {
// //             type: Sequelize.STRING
// //         },
// //         resGuests: {
// //             type: Sequelize.INTEGER
// //         },
// //     },
// //         { freezeTableName: true });

// //     guestInfo.associate = function (models) {
// //         onDelete: "cascade"
// //     };
// //     // guestInfo.sync({force: true}).then(function() {
// //     //     return guestInfo.create({
// //     //         resRestaurant: 'Fiesta Mexicana',
// //     //         resMobile: 3194040210,
// //     //         resAppetizer: 'Chips',
// //     //         resTime: '6:00',
// //     //         resGuests: 
// //     //     });
        
// //     // });
// //     guestInfo.sync ();
// //     module.exports = guestInfo;
// //     return guestInfo;
// // };
// //////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////
// ////COMMENTED OUT 11/28 207PM
var Sequelize = require("sequelize");
// ----- DATABASE CONNECTION REFERENCE ----- //
var sequelize = require("../config/connection.js");
// ----- CREATES RESERVATION MODEL TO MATCH DB ----- //

module.exports = function (sequelize, DataTypes) {
    var guestInfo = sequelize.define("guestInfo", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        resRestaurant: {
            type: DataTypes.STRING
        },
        resMobile: {
            type: DataTypes.STRING
        },
        resAppetizer: {
            type: DataTypes.STRING
        },
        resTime: {
            type: DataTypes.STRING
        },
        resGuests: {
            type: DataTypes.INTEGER
        },
    },
        
        { freezeTableName: true });

    // guestInfo.associate = function (models) {
    // //     onDelete: "cascade"
    // };
    // guestInfo.sync({force: true}).then(function() {
    //     return guestInfo.create({
    //         resRestaurant: 'Fiesta Mexicana',
    //         resMobile: 13194040210,
    //         resAppetizer: 'Chips',
    //         resTime: '6:00',
    //         resGuests: 8


    //     })
    // })
    // guestInfo.sync ();
    module.exports = guestInfo;
    return guestInfo;
};