// backend/index.js
const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors()); // Allow frontend requests from another port
app.use(express.json());

app.post('/subscribe', (req, res) => {
  const email = req.body.email;
  if (!email || !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  // Save email to subscribers.txt (append)
  const filePath = path.join(__dirname, 'subscribers.txt');
  fs.appendFile(filePath, email + '\n', err => {
    if (err) {
      console.error('Failed to save email:', err);
      return res.status(500).json({ error: 'Server error' });
    }
    res.json({ message: 'Thank you for subscribing!' });
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
