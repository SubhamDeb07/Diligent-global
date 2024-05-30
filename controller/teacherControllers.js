const Teacher = require("../model/teacher");

const signup = async (req, res, next) => {
  const { name, age } = req.body;

  const findUser = await Teacher.findOne({ where: { name: name } });

  if (req.body.name === findUser.name)
    return res.status(401).json({ message: "Teacher already exist" });
  const createTeacher = await Students.create({ name: name, age: age });
  if (!createTeacher) {
    return res.status(401).json({ message: "Teacher cannot be created" });
  }
  return res.status(401).json({ message: "Teacher created" });
};

const login = async (req, res, next) => {
  const { name } = req.body;
  const findUser = Teacher.findOne({ where: { name: name } });
  if (!findUser) {
    return res.status(401).json({ message: "Teacher cannot be created" });
  }

  return res.status(201).json({ message: "Teacher logged in successfully" });
};

module.exports = {
  signup,
  login,
};
