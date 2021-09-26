const Movie = require("./models/Movie")
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(cors())
const MONGODB_URI = "mongodb://localhost:27017/Movie";

app.get("/", (req, res) => {
  res.send("Nothing Here");
});

app.get("/api/movies", (req, res) => {
  mongoose
    .connect(MONGODB_URI, {
      // useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(async (self) => {
      console.log(`Connected to the database: "${self.connection.name}"`);
      const movies = await Movie.find({})
      res.json(movies);
      mongoose.disconnect()
    });
});

app.get("/api/movie/:id", (req, res) => {
    const id = req.params.id
    mongoose
      .connect(MONGODB_URI, {
        // useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(async (self) => {
        console.log(`Connected to the database: "${self.connection.name}"`);
        const movie = await Movie.findOne({_id: id})
        res.json(movie);
        mongoose.disconnect()
      });
  });

app.listen(5000);
