const express = require('express')
const { handleShorting } = require('../controllers/shortControllers')
require('dotenv').config()
const db = require('../connection')
const route = express.Router()
route.post('/', handleShorting)
module.exports = route