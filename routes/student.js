const express = require("express");
const studentController = require("../controller/studentControllers");

const router = express.Router();

router.post("/login", studentController.login);

router.post("/signup", studentController.signup);

export default router;
