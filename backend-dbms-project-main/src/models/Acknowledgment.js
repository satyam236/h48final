const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  alertId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'LabAlert'
  },
  acknowledgedBy: String,
  role: String,
  method: String,
  actionTaken: String,
  actionCategory: String,

  isVerified: { type: Boolean, default: false },
  verifiedBy: String

}, { timestamps: true });

module.exports = mongoose.model('Acknowledgment', schema);