module.exports = {
  index (req, res) {
    try {
      return res.render('about/index')
    } catch (err) {
      console.error(err)
    }
  }
}