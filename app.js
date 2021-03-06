const jwt = require('jsonwebtoken');

function authGuard(jwt_secret_key) {
    return (req, res, next) => {
        try {
            const authorization = req.headers.authorization;
            if (authorization && authorization.length > 0) {
                // get token
                const token = authorization.split(' ')[1];
                // verify token
                const decode = jwt.verify(token, jwt_secret_key);

                // get user info 
                req.user = decode;

                next();

            } else {
                res.status(401).json({
                    error: 'Incorrect Auth Information!',
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
