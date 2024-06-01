const db = require('../connection')
const handleRedirect = (req, res) => {
    const id = req.params.id
    db.query(`select url from urls where id = ?`, id, (err, result) => {
        if (err) {
            console.log("error to fetch", err)
            return res.status(500).json({error: "data fetching error"})
        }
        if (result.length == 0) {
            return res.status(404).json({error: "404 not found"})
        }
        res.redirect(result[0].url)
    })
}

module.exports = {handleRedirect}