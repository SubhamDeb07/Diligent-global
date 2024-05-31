const Sequelize = require("sequelize");

const sequelize = require("../util/database");
const Teacher = sequelize.define("teacher", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
module.exports = Student;
