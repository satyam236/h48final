const router = require('express').Router();
const c = require('../controllers/criticalValueController');

router.post('/', c.create);
router.get('/', c.getAll);
router.put('/:id', c.update);

module.exports = router;