const router = require("express").Router();
const {
  getUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../../controllers/userController");

// Create user
router.route("/").get(getUsers).post(createUser);

// Delete user
router.route("/:userId").get(getOneUser).delete(deleteUser);

// Update user
router.route("/:userId").get(getOneUser).put(updateUser).delete(deleteUser);

// Add friend
router.route("/:userId/friends").post(addFriend);

// Remove friend
router.route("/:userId/friends/:friendId").delete(removeFriend);

module.exports = router;
