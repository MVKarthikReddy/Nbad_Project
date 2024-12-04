

const express = require('express')
const ChartData = require('../models/ChartData.js')
const authenticateToken = require('../middleware/auth.js')

const router = express.Router();

router.get('/summary-chart', authenticateToken, async (req, res) => {
  try {
    const data = await ChartData.find({ category: 'summary' }).select('-_id title value');
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/reports-chart', authenticateToken, async (req, res) => {
  try {
    const data = await ChartData.find({ category: 'reports' }).select('-_id title value');
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;




