const LabAlert = require('../models/LabAlert');
const CriticalValue = require('../models/CriticalValue');
const evaluate = require('../services/evaluateLevel');

exports.submit = async (req, res) => {
  const { patientId, patientName, testCode, resultValue } = req.body;

  const config = await CriticalValue.findOne({ testCode });
  if (!config) return res.status(404).json({ msg: "No config" });

  const { level, direction } = evaluate(resultValue, config);

  const alert = await LabAlert.create({
    patientId,
    patientName,
    testCode,
    resultValue,
    alertLevel: level,
    breachDirection: direction
  });

  res.json(alert);
};

exports.getAll = async (req, res) => {
  const alerts = await LabAlert.find().sort({ createdAt: -1 });
  res.json(alerts);
};

exports.notify = async (req, res) => {
  const alert = await LabAlert.findByIdAndUpdate(
    req.params.id,
    { status: 'notified', notifiedAt: new Date() },
    { new: true }
  );
  res.json(alert);
};

exports.escalate = async (req, res) => {
  const alert = await LabAlert.findById(req.params.id);

  alert.escalationCount += 1;
  await alert.save();

  res.json(alert);
};

exports.resolve = async (req, res) => {
  const alert = await LabAlert.findByIdAndUpdate(
    req.params.id,
    { status: 'resolved' },
    { new: true }
  );
  res.json(alert);
};

exports.stats = async (req, res) => {
  const data = await LabAlert.aggregate([
    {
      $group: {
        _id: "$alertLevel",
        count: { $sum: 1 }
      }
    }
  ]);

  res.json(data);
};