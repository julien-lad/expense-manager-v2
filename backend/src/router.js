const express = require("express");

const router = express.Router();

const budjetControllers = require("./controllers/budjetControllers");
const expensesControllers = require("./controllers/expensesControllers");

router.get("/budjet", budjetControllers.browse);
router.get("/budjet/:id", budjetControllers.read);
router.put("/budjet/:id", budjetControllers.edit);
router.post("/budjet", budjetControllers.add);
router.delete("/budjet/:id", budjetControllers.destroy);

router.get("/expenses", expensesControllers.browse);
router.get("/expenses/:id", expensesControllers.read);
router.put("/expenses/:id", expensesControllers.edit);
router.post("/expenses", expensesControllers.add);
router.delete("/expenses/:id", expensesControllers.destroy);

module.exports = router;
