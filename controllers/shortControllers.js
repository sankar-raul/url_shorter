const db = require('../connection')
const getID = require('../functions/getId')
const handleShorting = async (req, res) => {
    const {url} = req.body
    if (!url) return res.status(400).json({error: "url must be given"})
    const id = await getID()
    db.query(`insert into urls (id, url) values (?,?)`, [id, url.trim()], err => {
        if (err) {
            console.log("error to insert", err)
            return res.status(500).json({error: "data inserting error"})
        }
        res.status(201).json({id: id})
    })
}
module.exports = { handleShorting }