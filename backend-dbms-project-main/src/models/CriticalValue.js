const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  testCode: { type: String, unique: true },
  testName: String,
  unit: String,
  category: String,

  panicLow: Number,
  panicHigh: Number,
  alertLow: Number,
  alertHigh: Number,
  infoLow: Number,
  infoHigh: Number
});

module.exports = mongoose.model('CriticalValue', schema);