const showValiDateResult = require("../middlewares/showValidateResult");
const authServices = require("../services/auth.services");
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
require('dotenv').config();
const SECRET_KEY = process.env.SECRET_KEY;
const EXPIRES_IN = process.env.EXPIRES_IN;


class authController {
    login = async (req, res) => {
        try {
            const { key, code } = req.body
            console.log("key: ", key)
            const hashedPassword = await bcrypt.hash(code, 10);
            const response = await authServices.login(key, hashedPassword)
            if (response) {
                const token = jwt.sign(
                    { key: key },
                    SECRET_KEY,
                    { expiresIn: parseInt(EXPIRES_IN) }
                );
                return res.status(200).json({
                    message: "Login Successfully!",
                    data: response,
                    token: token
                })
            }
            console.log("response: ", response)
            return res.status(401).json({
                message: "Unauthorized",
            })
        } catch (error) {
            return res.status(500).json({
                message: "Internal server error",
                errorDetail: error.message
            })
        }
    }
}

module.exports = new authController;