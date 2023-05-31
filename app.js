const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
const port = 3000; // Ganti dengan port yang sesuai
const secretKey = 'rahasia'; // Ganti dengan kunci rahasia yang kuat

app.use(bodyParser.json());
app.use(cors());

// Import router files
const authRoutes = require('./auth');
const profileRoutes = require('./profile');
const leaderboardRoutes = require('./leaderboard');
const cameraUsageRoutes = require('./camerausage');
const createRouter = require('./create');

// Login endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Implement authentication logic
  // Simple implementation example:
  if (username === 'user1' && password === 'password1') {
    // Authentication successful
    const token = jwt.sign({ username }, secretKey);
    res.json({ token });
  } else {
    // Authentication failed
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

// Create User endpoint
app.use('/users', createRouter);

// Register other routes
app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);
app.use('/leaderboard', leaderboardRoutes);
app.use('/camera-usage', cameraUsageRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});