const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection using environment variable
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Basic "Hello, World!" route
app.get('/', (req, res) => res.send('Hello, World!'));

// User Routes
const userRoutes = require('./routes/userRoutes');
const blogRoutes = require('./routes/blogRoutes');

app.use('/users', userRoutes);
app.use('/blogs', blogRoutes);

// Start server
const PORT = process.env.PORT || 4000;
const HOST = '0.0.0.0'; // Allow container to be accessible from outside

app.listen(PORT, HOST, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`);
});
