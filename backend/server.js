const express = require('express');
const cors = require('cors'); // 1. Import CORS
const app = express();

app.use(cors()); // 2. Enable CORS for all incoming requests

// This is the route your frontend is trying to fetch
app.get('/', (req, res) => {
    res.send('Hello from Express backend!');
});

app.listen(5000, () => {
    console.log('Server running on port 5000');
});