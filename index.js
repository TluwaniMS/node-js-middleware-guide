const express = require('express');
const app = express();
const dotenv = require('dotenv');
const personRoute = require('./routes/people');
const morgan = require('morgan')
dotenv.config({ path: './.env' });

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))
app.use(express.json());
app.use('/api/people',personRoute);

module.exports = app;
