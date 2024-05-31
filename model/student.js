const Sequelize = require("sequelize");
const Teacher = require("./teacher");

const sequelize = require("../util/database");
const Student = sequelize.define("student", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  teacherId: {
    type: Sequelize.INTEGER,
    references: {
      model: Teacher,
      key: "id",
    },
  },
});

Teacher.hasMany(Student, { foreignKey: "teacherId" });
Student.belongsTo(Teacher, { foreignKey: "teacherId" });

module.exports = Student;
