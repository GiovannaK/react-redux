class CarsController {

  index(req, res) {
    return res.json({
      message: 'test'
    })
  }
}

module.exports = new CarsController();