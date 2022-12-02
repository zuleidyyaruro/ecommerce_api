const {User, Product, Cart, Order, ProductInCart, ProductInOrder} = require("./index");

const initModels = () => {


    Product.belongsTo(User);
    User.hasMany(Product);

    Cart.belongsTo(User);
    User.hasOne(Cart);

    Order.belongsTo(User);
    User.hasMany(Order);

    ProductInCart.belongsTo(Product);
    Product.hasOne(ProductInCart);

    ProductInCart.belongsTo(Cart);
    Cart.hasMany(ProductInCart);

    ProductInOrder.belongsTo(Product);
    Product.hasOne(ProductInOrder);

    ProductInOrder.belongsTo(Order);
    Order.hasMany(ProductInOrder);
    
};

module.exports = initModels;
