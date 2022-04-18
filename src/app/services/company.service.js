const db = require("../models");
const Company = db.company;
const Op = db.Sequelize.Op;

exports.getAll = (whr) => {
    return Company.findAll({ where: whr });
}

exports.getById = (id) => {
    return Company.findByPk(id);
}

exports.create = (data) => {
    return Company.create(data);
}

exports.create = (id, data) => {
    return Company.update(data, {
        where: { id: id }
    });
}

exports.deleteById = (id) => {
    return Company.destroy({
        where: { id: id }
    });
}