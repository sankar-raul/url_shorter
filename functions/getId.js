const db = require("../connection")
const generateId = (len = 6) => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  let id = ""
  while (len != 0) {
    id += chars.charAt(Math.floor(Math.random() * chars.length))
    len--
  }
  return id
}
const generateUniqueId = async (len = 6) => {
  let _id
  let id = new Promise((resolve, reject) => {
    const fetch = () => {
      _id = generateId(len)
      db.query(`select id from urls where id = ?`, _id, (err, result) => {
        if (err) {
          console.log("error at generate unique id", err)
          reject(err)
        }
        if (result.length > 0) {
          console.log(result)
          fetch()
        }
        resolve(_id)
      })
    }
    fetch()
  })
  return await id
}
module.exports = generateUniqueId
