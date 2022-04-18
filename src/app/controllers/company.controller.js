const companyService = require("../services/company.service");
const db = require("../models");
const Company = db.bonus;
const Op = db.Sequelize.Op;

exports.getAll = (req, res) => {
    const whr = req.query.name ? { name: { [Op.like]: `%${req.query.name}%` } } : null;

    companyService.getAll(whr)
        .then(data => {
            res.status(200).send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message,
            });
        });

    return;
};

exports.getById = (req, res) => {
    companyService.getById(req.param.id)
        .then(data => {
            res.status(200).send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message,
            });
        });

    return;
};

exports.create = (req, res) => {
    companyService.create(req.body)
        .then(data => {
            res.status(201).send({ status: true });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message,
            });
        });

    return;
};

exports.update = (req, res) => {
    companyService.update(req.body, req.param.id)
        .then(data => {
            res.status(202).send({ status: true });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message,
            });
        });

    return;
};

exports.deleteById = (req, res) => {
    companyService.deleteById(req.param.id)
        .then(data => {
            res.status(204).send({ status: true });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message,
            });
        });

    return;
};