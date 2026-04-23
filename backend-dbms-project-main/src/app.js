const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/m48/critical-values', require('./routes/criticalValueRoutes'));
app.use('/api/m48/lab-alerts', require('./routes/labAlertRoutes'));
app.use('/api/m48/acknowledgments', require('./routes/ackRoutes'));

module.exports = app;