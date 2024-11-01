const { body, check } = require('express-validator');

class authMiddleWare {
    loginValidate = [
        body('key').notEmpty().withMessage('key is required!'),
        body('code').notEmpty().withMessage('code is required!'),
    ];
}

module.exports = new authMiddleWare();