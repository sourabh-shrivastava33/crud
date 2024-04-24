const { where } = require("sequelize");
const { User } = require("../models");

const createUser = async (req, res) => {
  const { firstName, lastName, email } = req.body;
  try {
    if (!firstName || !lastName || !email)
      throw new Error("Each field is required");
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      res.status(400);
      throw new Error("User already exists");
    }
    const user = await User.create({ firstName, lastName, email });
    return res.status(201).json({ user });
  } catch (error) {
    console.log(error);
    return res.json({ error: error.message });
  }
};
const getAllUser = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json({ users });
  } catch (error) {
    console.log(error);
  }
};
const getSingleUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findOne({ where: { uuid: id } });
    if (user) {
      res.status(200).json({ user });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
const updateUser = async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, email } = req.body;
  console.log(id);
  if (!id) return res.status(400).json({ message: "uuid is required" });
  let user = await User.findOne({ where: { uuid: id } });
  if (!user) return res.status(404).json({ message: "User not found" });
  if (!firstName && !lastName && !email)
    return res
      .status(400)
      .json({ message: "Atleast one field is required to update user" });
  if (firstName && lastName && email) {
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
  }
  if (firstName) {
    user.firstName = firstName;
  }
  if (lastName) {
    user.lastName = lastName;
  }
  if (email) {
    //   const user = await User.findOne({ where: { uuid } });
    const isEmailInDb = await User.findOne({ where: { email } });
    const isUserAuthorized = isEmailInDb
      ? user.email === email
        ? false
        : true
      : false;
    if (email && isUserAuthorized) {
      user.email = email;
    } else if (!isUserAuthorized) {
      res.status(401).json({ message: "Email already in use" });
    }
  }

  try {
    await user.save();
    return res.status(200).json({ message: "User updated" });
  } catch (error) {
    console.log(error);
    return res.json({ error: error.message });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    User.destroy({ where: { uuid: id } });
    res.status(200).json({ message: "User deleted Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createUser,
  getAllUser,
  getSingleUser,
  deleteUser,
  updateUser,
};
