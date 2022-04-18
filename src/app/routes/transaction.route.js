const transactionController = require("../controllers/transaction.controller");
const router = require("express").Router();

module.exports = (app) => {
  router.get("/", transactionController.getAll);
  router.get("/:id", transactionController.getById);
  router.post("/", transactionController.create);
  router.put("/:id", transactionController.update);
  router.delete("/:id", transactionController.deleteById);

  app.use('/api/transaction', router);
};
