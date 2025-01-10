const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const cors = require('cors');
const connectToDb = require('./db/db');
const userRoutes = require('./routes/user.routes');

// Establish MongoDB connection
connectToDb();

// Use CORS middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// Define a test route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});


app.use('/users',userRoutes);

module.exports = app;
