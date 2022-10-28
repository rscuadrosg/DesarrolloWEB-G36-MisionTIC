const express = require("express");
const router = express.Router();
const designsController = require("../controllers/designs.controller");

router.post("/", designsController.create)
router.get("/", designsController.find)
router.get("/:id", designsController.findOne)
router.put("/:id", designsController.update)
router.delete("/:id", designsController.remove)

module.exports = router