const express = require("express");
const parentController = require("../controller/parentsControllers");

const router = express.Router();

router.post("/login", parentController.login);

router.post("/signup", parentController.signup);

export default router;
