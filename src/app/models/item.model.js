module.exports = (sequelize, Sequelize) => {
    const Item = sequelize.define("item", {
        name: {
            type: Sequelize.STRING
        },
        price: {
            type: Sequelize.INTEGER
        },
        stock: {
            type: Sequelize.INTEGER
        },
    });

    return Item;
};