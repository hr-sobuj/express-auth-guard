const jwt = require('jsonwebtoken');

function authGuard(JWT_SECRET) {
    return function (req, res, next) {
        try {
            const auth = req.headers.authorization;
            if (auth && auth.length > 0) {
                // get token
                const token = auth.split(' ')[1];
                // verify token
                const decode = jwt.verify(token, JWT_SECRET);
    
                req.admin = decode;
                next();
            } else {
                res.status(401).json({
                    error: 'Authetication failure!',
                });
            }
        } catch (error) {
            res.status(401).json({
                error: 'Authetication failure!',
            });
        }
    }
}
// export module
module.exports = authGuard;
