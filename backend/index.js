const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const seeds = require("./bin/seeds");
const Movie = require("./models/Movie")

const MONGODB_URI = "mongodb://localhost:27017/myMovies";

mongoose
  .connect(MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((self) => {
    console.log(`Connected to the database: "${self.connection.name}"`);
    
  })
  .catch((error) => {
    console.error("Error connecting to the database", error);
  });

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use("/", require("./routes"));

app.listen(process.env.PORT || 5000);
