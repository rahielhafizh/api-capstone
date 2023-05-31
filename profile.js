const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const secretKey = 'rahasia'; // Same secret key used for token generation

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid token' });
    }
    req.username = decoded.username;
    next();
  });
};

router.get('/', authenticateToken, (req, res) => {
  const { username } = req;

  // Here you can fetch the user profile data from the database or another source
  const user = {
    username,
    name: 'user1',
    email: 'user1@example.com',
  };

  res.json(user);
});

module.exports = router;