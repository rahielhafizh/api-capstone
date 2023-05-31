const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cors = require('cors');

const secretKey = 'rahasia'; // Change to a strong secret key

router.use(cors());

router.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Simple example implementation:
  console.log('username', username, 'password', password, req.body);
  if (username === 'user1' && password === 'password1') {
    // Authentication successful
    const token = jwt.sign({ username }, secretKey);
    res.json({ token });
  } else {
    // Authentication failed
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

module.exports = router;