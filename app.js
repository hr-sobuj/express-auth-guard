const jwt = require('jsonwebtoken');

function authGuard(secret_key) {
    return  (req, res, next)=>{
        try {
            const auth = req.headers.authorization;
            if (auth && auth.length > 0) {
                // get token
                const token = auth.split(' ')[1];
                // verify token
                const decode = jwt.verify(token, secret_key);
    
                req.admin = decode;
                next();
            } else {
                res.status(401).json({
                    error: 'Incorrect Information!',
                    secret_key
                });
            }
        } catch (error) {
            res.status(401).json({
                error: 'Authetication failure!',
                secret_key
            });
        }
    }
}
// export module
module.exports = authGuard;
