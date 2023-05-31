const express = require('express');
const router = express.Router();

// Example leaderboard data
let leaderboard = [
  { username: 'user1', cameraUsage: 10 },
  { username: 'user2', cameraUsage: 15 },
  { username: 'user3', cameraUsage: 8 },
  { username: 'user4', cameraUsage: 12 },
  { username: 'user5', cameraUsage: 20 },
];

router.get('/', (req, res) => {
  // Sort the leaderboard data by cameraUsage in descending order (from highest to lowest)
  const sortedLeaderboard = leaderboard.sort((a, b) => b.cameraUsage - a.cameraUsage);

  res.json(sortedLeaderboard);
});

module.exports = router;