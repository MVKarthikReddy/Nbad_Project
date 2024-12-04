

// export default router;
const express = require('express');
const jwt = require('jsonwebtoken')
const router = express.Router();


// Login route
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === password) {
    const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '24h' });
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

module.exports = router;

