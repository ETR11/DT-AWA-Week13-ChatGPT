// server/db.js

const mongoose = require('mongoose');

// server/db.js

mongoose.set('debug', true);


mongoose.connect('mongodb://127.0.0.1:27017/chatgpt', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 30000, // 30 seconds timeout (adjust as needed)
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

module.exports = mongoose.connection;
