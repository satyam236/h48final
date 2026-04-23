const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: String,
  alertLevel: String,
  notifyType: String,
  recipientRole: String,
  contactInfo: String,

  escalationAfterMinutes: Number,

  escalatesTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'NotificationPath'
  }
});

module.exports = mongoose.model('NotificationPath', schema);