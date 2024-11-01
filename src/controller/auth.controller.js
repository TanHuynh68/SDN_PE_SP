const showValiDateResult = require("../middlewares/showValidateResult");
const authServices = require("../services/auth.services");
const bcrypt = require('bcrypt');
class authController {
    login = async (req, res) => {
        try {
            const { key, code } = req.body
            console.log("key: ", key)
            const hashedPassword = await bcrypt.hash(code, 10);
            const response = await authServices.login(key, hashedPassword)
            if (response) {
                return res.status(200).json({
                    message: "Login Successfully!",
                    data: response
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