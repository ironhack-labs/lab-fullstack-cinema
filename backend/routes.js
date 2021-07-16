const express = require("express");
const router = express.Router();
const seeds = require("./bin/seeds");
const Movie = require("./models/Movie");

router.get("/", (req, res) => {
  // Clear database, then Seed database with array on seeds.js
  //   Movie.deleteMany().then(() => {
  //     Movie.insertMany(seeds).then((movies) => res.json(movies));
  //   });
});

router.get("/movies", (req, res) => {
    Movie.find().then(movies => {
        res.json(movies)
    })
})

module.exports = router;
