const express = require('express');
const http = require('http');
const mongoose = require('mongoose');

const cors = require('cors');

mongoose
	.connect(`mongodb://localhost:27017/moviesDB`)
	.then((self) => console.log(`Connected to the database: "${self.connection.name}"`));

const app = express();
app.use(cors()); //for cors
app.use(express.json()); //for req.body

app.listen(process.env.PORT || 5000);
