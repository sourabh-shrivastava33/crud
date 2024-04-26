const { sequelize } = require("./models");
const cors = require("cors");
const path = require("path");
const express = require("express");
const app = express();
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
