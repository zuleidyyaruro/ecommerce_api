const db = require("../utils/database");
const {DataTypes} = require("sequelize");

const ProductInOrder = db.define("product_in_order", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        orderId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: "order_id",
        },
        productId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: "product_id",
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        status: {
            type: DataTypes.ENUM("complete", "incomplete"),
            defaultValue: "incomplete",
        },
    },
    {
        timestamps: false,
    }
);

module.exports = ProductInOrder;
