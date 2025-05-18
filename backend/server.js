require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const profilesRoute = require('./routes/profiles');
const donationsRoute = require('./routes/donations');
const registrationRoutes = require('./routes/registration');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.use('/api/profiles', profilesRoute);
app.use('/api/donations', donationsRoute);
app.use('/api', registrationRoutes); // Registration route under /api

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
