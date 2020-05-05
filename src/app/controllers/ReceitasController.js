module.exports = {
  index (req, res) {
    try {
      return res.render('recipes/index')
    } catch (err) {
      console.error(err)
    }
  } 
}