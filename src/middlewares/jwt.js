var jwt = require('jsonwebtoken');
var { jwtDecode } = require('jwt-decode');
// require('dotenv').config();
const SECRET_KEY = "a";

class jwtMiddleWare {
    createToken = (data, SECRET_KEY, expiresIn) => {
        const token = jwt.sign(data, SECRET_KEY, {
            expiresIn: expiresIn,
        });
        return token
    }

    authenticateToken = (req, res, next) => {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1]; // Lấy token từ header
        if (token) {
            jwt.verify(token, SECRET_KEY, (err, user) => {
                console.log("err: ", err)
                console.log("token: ", token)
                if (err) {
                    return res.status(403).json({
                        message: 'Invalid token.'
                    });
                }
                console.log("user: ", user)
                req.user = user;
                next();
            });
        } else {
            return res.status(401).json({
                message: 'Access denied. No token provided.'
            });
        }
    };

    isAdmin = (req, res, next) => {
        const isAdmin = req.user.isAdmin
        if (isAdmin === false) {
            return res.status(403).json({
                message: 'You are not Admin.'
            });
        } else {
            next();
        }
    };

    isMember = (req, res, next) => {
        const isAdmin= req.user.isAdmin
        if (isAdmin === true) {
            return res.status(403).json({
                message: 'You are not Member.'
            });
        } else {
            next();
        }
    };
}

module.exports = new jwtMiddleWare();