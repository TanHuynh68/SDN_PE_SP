var express = require('express');
const authMiddleware = require('../src/middlewares/auth.middleware');
const authController = require('../src/controller/auth.controller');
var router = express.Router();

/* GET users listing. */
router.post('/login', authController.login);

module.exports = router;
