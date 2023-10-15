const express = require('express');
const Latihan1 = require('../controller/latihan');

const router = express.Router();

router.post('/',Latihan1.kalkulator2);
router.get('/',Latihan1.looping1);

module.exports = router;