const express = require('express');
const defaultPageController = require('../controllers/default-page');

const router = express.Router();

router.get('/', defaultPageController.getMainPage);

module.exports = router;