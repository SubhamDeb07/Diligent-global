const Students = require("../model/student");

const signup = async (req, res, next) => {
  const { name, age } = req.body;

  const findUser = await Students.findOne({ where: { name: name } });

  if (req.body.name === findUser.name)
    return res.status(401).json({ message: "Student already exist" });
  const createStudent = await Students.create({ name: name, age: age });
  if (!createStudent) {
    return res.status(401).json({ message: "Student cannot be created" });
  }
  return res.status(401).json({ message: "Student created" });
};

const login = async (req, res, next) => {
  const { name } = req.body;
  const findUser = Students.findOne({ where: { name: name } });
  if (!findUser) {
    return res.status(401).json({ message: "Student cannot be created" });
  }

  return res.status(201).json({ message: "Student logged in successfully" });
};

module.exports = {
  signup,
  login,
};
