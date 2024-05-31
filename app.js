const express = require("express");
const app = express();
const studentRoute = require("./routes/student");
const parentRoute = require("./routes/parents");
const teacherRoute = require("./routes/teacher");
const sequelize = require("./util/database");

const Port = 3000;

app.use(express.json());

app.use("/student", studentRoute);
app.use("/parent", parentRoute);
app.use("/teacher", teacherRoute);

sequelize
  .sync({ force: false })
  .then((result) => {
    console.log("Server started at 3000");
    app.listen(process.env.PORT || Port);
  })
  .catch((err) => {
    console.log(err);
  });
