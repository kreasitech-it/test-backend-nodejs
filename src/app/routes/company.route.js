const companyController = require("../controllers/company.controller");
const router = require("express").Router();

module.exports = (app) => {
  router.get("/", companyController.getAll);
  router.get("/:id", companyController.getById);
  router.post("/", companyController.create);
  router.put("/:id", companyController.update);
  router.delete("/:id", companyController.deleteById);

  app.use('/api/company', router);
};
