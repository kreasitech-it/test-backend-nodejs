const itemController = require("../controllers/item.controller");
const router = require("express").Router();

module.exports = (app) => {
  router.get("/", itemController.getAll);
  router.get("/:id", itemController.getById);
  router.post("/", itemController.create);
  router.put("/:id", itemController.update);
  router.delete("/:id", itemController.deleteById);

  app.use('/api/item', router);
};
