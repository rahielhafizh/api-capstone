const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.json());

// Example leaderboard data
let leaderboard = [
  { username: 'user1', cameraUsage: 10 },
  { username: 'user2', cameraUsage: 15 },
  { username: 'user3', cameraUsage: 8 },
  { username: 'user4', cameraUsage: 12 },
  { username: 'user5', cameraUsage: 20 },
];

router.put('/', (req, res) => {
  const { username, usageCount } = req.body;

  // Update camera usage for a specific user with the given username
  const user = leaderboard.find((user) => user.username === username);
  if (!user) {
    res.status(404).json({ error: 'User not found' });
    return;
  }

  user.cameraUsage = usageCount;

  // Re-sort the leaderboard after camera usage update
  leaderboard.sort((a, b) => b.cameraUsage - a.cameraUsage);

  res.status(200).json({ message: 'Camera usage updated successfully' });
});

module.exports = router;