const express = require('express');
const { InfoController} = require('../../controllers');

console.log(InfoController);

const router = express.Router();

router.get('/info', InfoController.info);

module.exports = router;