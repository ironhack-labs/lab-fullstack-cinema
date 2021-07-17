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

router.get("/movie/:dynamicId", (req, res) => {
         //res.json(req.params.dynamicId)
         Movie.findOne({_id: req.params.dynamicId}).then( (movie) => {
             res.json(movie)
         })
})

router.post("/addmovie", (req, res) => {
    console.log(("New movie: ", req.body));
    Movie.create(req.body).then((movies) => {
        res.json(movies)
    })
})

module.exports = router;
