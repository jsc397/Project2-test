const express = require('express')
const router = express.Router();

router.use('/problems', require('./problem'))


module.exports = router