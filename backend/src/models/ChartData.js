// import mongoose from 'mongoose';

// const ChartDataSchema = new mongoose.Schema({
//   title: String,
//   value: Number,
//   category: String
// });

// export const ChartData = mongoose.model('ChartData', ChartDataSchema);


// import mongoose from 'mongoose';

// const ChartDataSchema = new mongoose.Schema({
//   title: String,
//   value: Number,
//   category: String,
// });

// const ChartData = mongoose.model('ChartData', ChartDataSchema);
// export default ChartData;

import mongoose from 'mongoose';

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

export default mongoose.model('ChartData', ChartDataSchema);

