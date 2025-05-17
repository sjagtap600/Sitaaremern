const mongoose = require('mongoose');

const BeneficiarySchema = new mongoose.Schema({
  name: String,
  age: Number,
  bio: String,
  photoUrl: String,
  status: { type: String, enum: ['Active','Adopted'], default: 'Active' },
});

module.exports = mongoose.model('Beneficiary', BeneficiarySchema);
