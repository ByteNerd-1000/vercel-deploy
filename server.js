
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');

// Use middleware
app.use(cors());
app.use(express.json()); // To parse JSON body

let messages = []; // Array to store messages

// POST request to store a message
app.post('/message', (req, res) => {
    const { message } = req.body; // Extract message from the request body
    messages.push(message); // Store the message in the array
    res.json({ message: 'Message stored successfully!' });
});

// GET request to retrieve all stored messages
app.get('/message', (req, res) => {
    res.json({ messages: messages }); // Return all messages as an array
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
