const express = require('express');
const emojiController = require('../controllers/emojiController');
const router = express.Router();
router.get('/', emojiController)
module.exports = router;