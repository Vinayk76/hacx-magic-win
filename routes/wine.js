const express = require('express');
const router = express.Router();
router.get('/wine', (req, res) => res.json({ msg: 'Wine Part is Working' }));

module.exports = router;
