const router = require("express").Router();
const {
  getThoughts,
  getOneThought,
  createThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thoughtController");

// Create thought
router.route("/").get(getThoughts).post(createThought);

// Delete thought
router.route("/:thoughtId").get(getOneThought).delete(deleteThought);

// Create reaction
router.route("/:thoughtId/reactions").post(addReaction);

// Delete reaction
router.route("/:thoughtId/reactions/:reactionId").delete(removeReaction);

module.exports = router;
