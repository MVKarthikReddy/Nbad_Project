

const mongoose = require('mongoose')

const ChartDataSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  value: {
    type: Number,
    required: true
  },
   category: {
    type: String,
    required: true,
    enum: ['summary', 'reports']
  },
  name: String 
});

module.exports = mongoose.model('ChartData', ChartDataSchema);

