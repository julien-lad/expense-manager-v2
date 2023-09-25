const express = require("express");

const router = express.Router();

const budjetControllers = require("./controllers/budjetControllers");

router.get("/budjet", budjetControllers.browse);
router.get("/budjet/:id", budjetControllers.read);
router.put("/budjet/:id", budjetControllers.edit);
router.post("/budjet", budjetControllers.add);
router.delete("/budjet/:id", budjetControllers.destroy);

module.exports = router;
