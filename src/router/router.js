const express = require('express');
const router = express.Router();
const {webhook} = require('../controllers/Controllers');
router.post('/webhook',webhook);

module.exports = router;