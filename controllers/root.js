const db = require('../connection')
const path = require('path')
const handleRedirect = (req, res) => {
    const id = req.params.id
    db.query(`select url from urls where id = ?`, id, (err, result) => {
        if (err) {
            console.log("error to fetch", err)
            return res.status(500).json({error: "data fetching error"})
        }
        if (result.length == 0) {
            return res.status(404).sendFile(path.join(__dirname, "..", "views", "404.html"))
        }
        res.redirect(result[0].url)
    })
}

module.exports = {handleRedirect}