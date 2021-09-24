const mongoose = require("mongoose");

mongoose
  .connect(MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async (self) => {
    console.log(`Connected to the database: "${self.connection.name}"`);
