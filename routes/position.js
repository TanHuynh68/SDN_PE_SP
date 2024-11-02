var express = require('express');
const positionController = require('../src/controller/position.controller');
const jwt = require('../src/middlewares/jwt');
var router = express.Router();
router.get('/' ,jwt.authenticateToken, positionController.getPosition);
router.post('/',jwt.authenticateToken, positionController.createPosition);
router.put('/:id',jwt.authenticateToken, positionController.editPosition);
router.delete('/:id',jwt.authenticateToken, positionController.deletePosition);
module.exports = router;
