const jwt = require('jsonwebtoken');

const SECRET_KEY = 'homestay_access_token_secret';
const ACCESS_TOKEN_EXPIRES_IN = '30m';

function generateAccessToken(user) {
    const payload = {
        userId: user.userId,
        username: user.username,
        role: user.role
    };

    return jwt.sign(payload, SECRET_KEY, {
        expiresIn: ACCESS_TOKEN_EXPIRES_IN
    });
}

module.exports = {
    generateAccessToken
};