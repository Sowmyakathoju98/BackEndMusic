const mongoose = require('mongoose');

const initializeMongoDb = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/MusicTest', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection failed:', err);
  }
};

module.exports = { initializeMongoDb };