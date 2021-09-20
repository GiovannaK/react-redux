const {Router} = require('express')
const CarsController = require('./controllers/CarsController');

const router = Router()

router.get('/cars', CarsController.index)


module.exports = router;