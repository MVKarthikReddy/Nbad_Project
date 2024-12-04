// import express from 'express';
// import jwt from 'jsonwebtoken';

// const router = express.Router();

// router.post('/login', (req, res) => {
//   const { username, password } = req.body;
  
//   if (username === password) {
//     const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '24h' });
//     res.json({ token });
//   } else {
//     res.status(401).json({ message: 'Invalid credentials' });
//   }
// });

// export default router;


import express from 'express';
import jwt from 'jsonwebtoken';

const router = express.Router();

// Middleware to authenticate tokens
export const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.status(401).json({ message: 'Unauthorized' });

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: 'Forbidden' });
    req.user = user;
    next();
  });
};

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

export default router;

// import express from 'express';
// import jwt from 'jsonwebtoken';

// const router = express.Router();

// router.post('/login', (req, res) => {
//   const { username, password } = req.body;

//   if (username === 'bhargav' && password === 'bhargav') {
//     const token = jwt.sign({ username }, process.env.JWT_SECRET || 'mykey123');
//     res.json({ token });
//   } else {
//     res.status(401).json({ message: 'Invalid credentials Try again' });
//   }
// });

// export default router;