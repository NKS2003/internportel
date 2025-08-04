// backend/server.js

const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

// Dummy intern data
app.get('/api/intern', (req, res) => {
  res.json({
    name: "Naresh Kumar",
    referralCode: "naresh2025",
    totalDonations: 1500
  });
});

// Dummy leaderboard data
app.get('/api/leaderboard', (req, res) => {
  res.json([
    { name: "Naresh Kumar", amount: 1500 },
    { name: "Ravi Sharma", amount: 1200 },
    { name: "Priya Mehta", amount: 1000 }
  ]);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
