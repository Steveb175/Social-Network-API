const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reactions");

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: String,
      required: true,
      ref: "User",
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
    id: false,
  }
);

thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

thoughtSchema.virtual("dateCreatedAt").get(function () {
  return this.createdAt;
});

const Thought = model("thought", thoughtSchema);

module.exports = Thought;
