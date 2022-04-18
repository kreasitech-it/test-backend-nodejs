const db = require("../models");
const Transaction = db.transaction;
const Op = db.Sequelize.Op;

exports.getAll = (whr) => {
    return Transaction.findAll({ where: whr });
}

exports.getById = (id) => {
    return Transaction.findByPk(id);
}

exports.create = (data) => {
    return Transaction.create(data);
}

exports.create = (id, data) => {
    return Transaction.update(data, {
        where: { id: id }
    });
}

exports.deleteById = (id) => {
    return Transaction.destroy({
        where: { id: id }
    });
}