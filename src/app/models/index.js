const dbConfig = require("../db.config");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.db, dbConfig.user, dbConfig.password, {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.company = require("./company.model")(sequelize, Sequelize);
db.item = require("./item.model")(sequelize, Sequelize);
db.transaction = require("./transaction.model")(sequelize, Sequelize);

db.transaction.belongsTo(db.company);
db.transaction.belongsTo(db.item);

module.exports = db;