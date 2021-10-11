const express = require('express');
const connectDB = require('../config/database');
const routes = require('./routes')
const cors = require('cors');
const dotenv = require('dotenv').config()

const app = express();
const PORT  = process.env.PORT || 4000

app.use(cors())
app.use(express.json())
connectDB();
app.use(routes)
app.set('PORT', PORT)

module.exports = app;