const db = require("../utils/database");
const {DataTypes} = require("sequelize");

const Order = db.define("orders", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "user_id",
    },
    status: {
        type: DataTypes.ENUM("complete", "pending"),
        defaultValue: "pending",
    },
    totalPrice: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "total_price",
    },
});

module.exports = Order;
