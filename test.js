const { generateAccessToken } = require('./accesstoken.js');
const user = {
    userId: 1,
    username: 'le_tan',
    role: 'RECEPTIONIST',
    password: '12345678'
};

const token = generateAccessToken(user);

console.log('Access Token:');
console.log(token);