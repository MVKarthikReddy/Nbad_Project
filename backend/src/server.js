import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
import chartRoutes from './routes/charts.js';

dotenv.config();

const app = express();
app.use(cors({
  origin: 'http://192.168.1.100' 
}));
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/charts', chartRoutes);

const JWT_SECRET = process.env.JWT_SECRET || 'bhargav123';


mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://bhargavmodugulla:5jmURP6eLXMFqYr7@cluster0.g2lgb.mongodb.net/b94');


const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.sendStatus(401);

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

// Login endpoint
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  
  // Simple authentication (as per requirements)
  if (username === password) {
    const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '24h' });
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials Try again' });
  }
});

// Protected chart data endpoints
app.get('/charts/summary-chart', authenticateToken, async (req, res) => {
  try {
    const data = await ChartData.find({ category: 'summary' }).select('-_id title value');
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get('/charts/reports-chart', authenticateToken, async (req, res) => {
  try {
    const data = await ChartData.find({ category: 'reports' }).select('-_id title value');
    res.json(data);
    console.log("data from server.js", data)
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});



// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
