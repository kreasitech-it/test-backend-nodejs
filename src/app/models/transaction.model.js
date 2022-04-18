module.exports = (sequelize, Sequelize) => {
    const Transaction = sequelize.define("transaction", {
        companyId: {
            type: Sequelize.INTEGER,
            references: {
                model: 'companies',
                key: 'id',
            }
        },
        itemId: {
            type: Sequelize.INTEGER,
            references: {
                model: 'items',
                key: 'id',
            }
        },
        amount: {
            type: Sequelize.INTEGER
        },
    });

    return Transaction;
};