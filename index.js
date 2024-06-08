const express = require('express')
const path = require('path')
const app = express()
const { handleRedirect } = require('./controllers/root')
const {pageNotFound} = require('./controllers/pageNotFound')
const short = require('./routes/short')
require('dotenv').config()
const port = process.env.PORT || 8080
app.use(express.static('public'))
app.use(express.json())
app.use('/short', short)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "views", "index.html"))
})
app.get('/:id', handleRedirect)
app.use(pageNotFound)
app.listen(port, () => {
    console.log(`running at http://localhost:${port}`)
})