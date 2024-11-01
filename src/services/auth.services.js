const members = require("../models/member")


class authService {
    login = async (key, code) => {
        try {
            const response = await members.find({ key: key, code: code })
            if (response) {
                return response
            }
        } catch (error) {
            console.log("login-error: ", error)
        }
    }
}

module.exports = new authService()