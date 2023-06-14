const connection = require("../config/connection");
const { Thought, User } = require("../models");
const { getUsername } = require("./data");

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");

  //Drop existing data
  await Thought.deleteMany({});
  await User.deleteMany({});

  // Get username from helper function
  const users = getUsername(11);

  //Add users to the collection
  await User.collection.insertMany(users);

  // Log seed data
  console.table(users);
  console.info("Seeding complete!");
  process.exit(0);
});
