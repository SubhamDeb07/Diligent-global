const express = require("express");
const teacherController = require("../controller/teacherControllers");

const router = express.Router();

router.post("/login", teacherController.login);

router.post("/signup", teacherController.signup);

router.get("/:id", teacherController.getStudent);

export default router;
