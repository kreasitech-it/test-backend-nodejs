const transactionService = require("../services/transaction.service");
const db = require("../models");
const Transaction = db.bonus;
const Op = db.Sequelize.Op;

exports.getAll = (req, res) => {
    const whr = req.query.name ? { name: { [Op.like]: `%${req.query.name}%` } } : null;

    transactionService.getAll(whr)
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
    transactionService.getById(req.param.id)
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
    transactionService.create(req.body)
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
    transactionService.update(req.body, req.param.id)
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
    transactionService.deleteById(req.param.id)
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