const {Router} = require('express')
const CarsController = require('./controllers/CarsController');

const router = Router()

router.get('/cars', CarsController.index)
router.post('/cars', CarsController.create)


module.exports = router;