const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
  name: String,
  email: String,
  address: String,
  phone: String,
});

module.exports = mongoose.model('Registration', registrationSchema,);
