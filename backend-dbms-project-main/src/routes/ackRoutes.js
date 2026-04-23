const router = require('express').Router();
const c = require('../controllers/ackController');

router.post('/', c.create);
router.put('/:id/verify', c.verify);

module.exports = router;