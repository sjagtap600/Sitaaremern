require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const profilesRoute = require('./routes/profiles');
const donationsRoute = require('./routes/donations');

const app = express();
app.use(cors(), express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.use('/api/profiles', profilesRoute);
app.use('/api/donations', donationsRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
