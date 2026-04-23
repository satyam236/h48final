const CriticalValue = require('../models/CriticalValue');

exports.create = async (req, res) => {
  const data = await CriticalValue.create(req.body);
  res.json(data);
};

exports.getAll = async (req, res) => {
  const data = await CriticalValue.find();
  res.json(data);
};

exports.update = async (req, res) => {
  const data = await CriticalValue.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(data);
};