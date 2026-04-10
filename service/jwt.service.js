const jwt = require('jsonwebtoken');
require("dotenv").config();
const SECRET = process.env.JWT_SECRET;

// Função para gerar um token JWT
function generateToken(payload) {
    return jwt.sign(payload, SECRET, { expiresIn: '1h' });
}

function verifyToken(token) {
    try {
        return jwt.verify(token, SECRET);
    } catch (err) {
        console.error('Token inválido:', err);
        return null; // Token inválido ou expirado
    }
}

module.exports = { generateToken, verifyToken };