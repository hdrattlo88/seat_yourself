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
    return guestInfo;
};