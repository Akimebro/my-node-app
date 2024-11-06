const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Serve the form when the root URL is accessed
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Handle form submission (POST request)
app.post('/submit-form', (req, res) => {
    const username = req.body.username; // Get the data from the form

    // Debugging: Log the submitted form data
    console.log('Form submitted with username:', username);

    // Add validation: If no username is provided, return an error message
    if (!username) {
        return res.send('Username is required');
    }

    // If a username is provided, respond with a confirmation message
    res.send(`Thank you for submitting, ${username}!`);
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
