const Ack = require('../models/Acknowledgment');
const LabAlert = require('../models/LabAlert');

exports.create = async (req, res) => {
  const ack = await Ack.create(req.body);

  await LabAlert.findByIdAndUpdate(req.body.alertId, {
    status: 'acknowledged',
    acknowledgedAt: new Date()
  });

  res.json(ack);
};

exports.verify = async (req, res) => {
  const ack = await Ack.findByIdAndUpdate(
    req.params.id,
    { isVerified: true },
    { new: true }
  );

  res.json(ack);
};