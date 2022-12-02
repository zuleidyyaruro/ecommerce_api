const db = require('../utils/database');
const {DataTypes} = require('sequelize');


const Product = db.define("products", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    availableQty: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "available_qty",
    },
    status: {
        type: DataTypes.STRING,
        defaultValue: 'disabled',
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "user_id",
    },
    image: {
        type: DataTypes.STRING,
    }
})

module.exports = Product;
