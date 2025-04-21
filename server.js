const express = require('express');
const bodyParser = require('body-parser');
const { createObjectCsvWriter } = require('csv-writer');
const path = require('path');
const app = express();
const port = process.env.PORT || 10000; // Default to port 10000 for Render

// Middleware to parse incoming form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the root directory
app.use(express.static(path.join(__dirname)));

// Route to handle form submissions
app.post('/submit-form', (req, res) => {
    const formData = req.body;

    const csvWriter = createObjectCsvWriter({
        path: 'responses.csv',
        header: [
            { id: 'discordUsername', title: 'Your discord username' },
            { id: 'discordId', title: 'Your discord ID' },
            { id: 'experience', title: 'Past experiences' },
            { id: 'interest', title: 'Why are you interested' },
            { id: 'plans', title: 'Plans to contribute' },
            { id: 'strengths', title: 'Strengths' },
            { id: 'activeCommunity', title: 'How active are you' },
            { id: 'stressHandling', title: 'Handle stress' },
            { id: 'dramaHandling', title: 'Handling drama' },
            { id: 'leakerHandling', title: 'Leaker handling' },
            { id: 'agreement', title: 'Agreement' },
            { id: 'signature', title: 'Roblox username' }
        ],
        append: true
    });

    // Write form data to CSV
    csvWriter.writeRecords([formData])
        .then(() => {
            console.log('Form data saved to CSV.');
            res.sendFile(path.join(__dirname, 'thank-you.html')); // Serve thank-you page
        })
        .catch((err) => {
            console.error('Error saving form data:', err);
            res.status(500).send('Internal Server Error');
        });
});

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
