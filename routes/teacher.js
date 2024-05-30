const express = require("express");
const teacherController = require("../controller/teacherControllers");

const router = express.Router();

router.post("/login", teacherController.login);

router.post("/signup", teacherController.signup);

export default router;
