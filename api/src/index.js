const express = require('express');
const connectDB = require('../config/database');
const routes = require('./routes')
const dotenv = require('dotenv').config()

const app = express();
const PORT  = process.env.PORT || 4000

app.use(express.json())
connectDB();
app.use(routes)
app.set('PORT', PORT)

module.exports = app;