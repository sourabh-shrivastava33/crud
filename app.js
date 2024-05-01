const { Sequelize } = require("./models");
const cors = require("cors");
const path = require("path");
const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const sequelize = new Sequelize({
  dialect: "postgres",
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});
const userRouter = require("./routes/user");
app.use(express.json());
app.use(cors());
app.use("/api/users", userRouter);
app.use(express.static(path.join(__dirname, "/frontend/dist")));
app.get("*", (req, res) =>
  res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))
);

app.use("*", (req, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.listen(5000, async () => {
  console.log("Server listening");
  await sequelize.authenticate();
  console.log("Database connected");
});
