const Parents = require("../model/parents");

const signup = async (req, res, next) => {
  const { name, age } = req.body;

  const findUser = await Parents.findOne({ where: { name: name } });

  if (req.body.name === findUser.name)
    return res.status(401).json({ message: "Parent already exist" });
  const createParent = await Students.create({ name: name, age: age });
  if (!createParent) {
    return res.status(401).json({ message: "Parent cannot be created" });
  }
  return res.status(401).json({ message: "Parent created" });
};

const login = async (req, res, next) => {
  const { name } = req.body;
  const findUser = Parents.findOne({ where: { name: name } });
  if (!findUser) {
    return res.status(401).json({ message: "Parent cannot be created" });
  }

  return res.status(201).json({ message: "Parent logged in successfully" });
};

module.exports = {
  signup,
  login,
};
