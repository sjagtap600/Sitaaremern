const Beneficiary = require('../models/Beneficiary');

exports.getAll = async (req, res) => {
  try {
    const data = await Beneficiary.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Server Error' });
  }
};

exports.getOne = async (req, res) => {
  try {
    const data = await Beneficiary.findById(req.params.id);
    if (!data) return res.status(404).json({ error: 'Not Found' });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Server Error' });
  }
};
