const db = require("../models");
const Item = db.item;
const Op = db.Sequelize.Op;

exports.getAll = (whr) => {
    return Item.findAll({ where: whr });
}

exports.getById = (id) => {
    return Item.findByPk(id);
}

exports.create = (data) => {
    return Item.create(data);
}

exports.create = (id, data) => {
    return Item.update(data, {
        where: { id: id }
    });
}

exports.deleteById = (id) => {
    return Item.destroy({
        where: { id: id }
    });
}