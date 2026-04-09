const bcrypt = require("bcrypt");
const SALT_ROUNDS = 10;

// Função para gerar um hash da senha
async function hashPassword(password) {
  return await bcrypt.hash(password, SALT_ROUNDS);
}

module.exports = { hashPassword };
