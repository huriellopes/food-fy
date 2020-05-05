module.exports = {
  index (req, res) {
    try {
      return res.render('home/index')
    } catch (err) {
      console.error(err)
    }
  }
}