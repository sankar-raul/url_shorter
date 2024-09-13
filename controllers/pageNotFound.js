const path = require('path')
const pageNotFound = (req, res) => {
    res.sendFile(path.join(__dirname, "..", "views", "404.html"))
}
module.exports = {pageNotFound}