const usernames = [
  "Luke-Skywalker",
  "Princess-Leia",
  "Han-Solo",
  "Chewbacca",
  "Darth-Vader",
  "Obi-Wan-Kenobi",
  "Yoda",
  "R2-D2",
  "C-3PO",
  "Lando-Calrissian",
  "Anakin-Skywalker",
  "Padme-Amidala",
  "Rey",
  "Finn",
  "Poe-Dameron",
];

const emails = [
  "luke@starwars.com",
  "leia@starwars.com",
  "han@starwars.com",
  "chewie@starwars.com",
  "vader@starwars.com",
  "obiwan@starwars.com",
  "yoda@starwars.com",
  "r2d2@starwars.com",
  "c3po@starwars.com",
  "lando@starwars.com",
  "anakin@starwars.com",
  "padme@starwars.com",
  "rey@starwars.com",
  "finn@starwars.com",
  "poe@starwars.com",
];

// Gets a random name
const getUsername = (random) => {
  const results = [];
  for (let i = 0; i < random; i++) {
    results.push({
      username: usernames[i],
      email: emails[i],
    });
  }
  return results;
};

module.exports = { getUsername };
