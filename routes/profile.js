const express = require('express');
const router = express.Router();
router.get('/wine', (req, res) => res.json({ msg: 'Profile Part is Working' }));

module.exports = router;
