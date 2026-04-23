const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  patientId: String,
  patientName: String,
  ward: String,

  testCode: String,
  resultValue: Number,
  unit: String,

  alertLevel: String,
  breachDirection: String,

  status: {
    type: String,
    default: 'pending'
  },

  notifiedAt: Date,
  acknowledgedAt: Date,

  escalationCount: { type: Number, default: 0 }

}, { timestamps: true });

module.exports = mongoose.model('LabAlert', schema);