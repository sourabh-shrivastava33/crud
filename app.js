const { where } = require("sequelize");
const { sequelize } = require("./models");
const express = require("express");
const app = express();
const userRouter = require("./routes/user");
app.use(express.json());

app.use("/users", userRouter);

app.use("*", (req, res) => {
  res.status(404).json({ message: "Route not found" });
});
app.listen(5000, async () => {
  console.log("Server listening");
  await sequelize.authenticate();
  console.log("Database connected");
});
