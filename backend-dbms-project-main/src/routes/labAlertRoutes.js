const router = require('express').Router();
const c = require('../controllers/labAlertController');

router.post('/submit', c.submit);
router.get('/', c.getAll);

router.put('/:id/notify', c.notify);
router.put('/:id/escalate', c.escalate);
router.put('/:id/resolve', c.resolve);

router.get('/stats', c.stats);

module.exports = router;