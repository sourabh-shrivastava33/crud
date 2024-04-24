const express = require("express");
const {
  createUser,
  getAllUser,
  getSingleUser,
  deleteUser,
  updateUser,
} = require("../controllers/user");
const router = express.Router();
router.route("/").post(createUser).get(getAllUser);
router.route("/:id").get(getSingleUser).delete(deleteUser).patch(updateUser);
module.exports = router;
