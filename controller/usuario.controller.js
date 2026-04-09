const Usuario = require("../models/Usuario");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { hashPassword } = require("../service/bcrypt.service");

require("dotenv").config();
const SECRET = process.env.JWT_SECRET;

const cadastrar = async (rec, res) => {
  const valores = rec.body;
  console.log(valores);

  try {
    const senhaHash = await hashPassword(valores.senha);
    const user = await Usuario.create({
      ...valores,
      senha: senhaHash,
    });
    // rec.status(200).json(user)
  } catch (error) {
    console.error("erro ao cadastrar usuario: ", error);
    res.status(500).json({ message: "erro ao cadastrar o usuario" });
  }
};

const listar = async (rec, res) => {
  try {
    const users = await Usuario.findAll({ raw: true });
    res.status(200).json(users);
  } catch (error) {
    console.error("erro ao listar os usuarios", error);
    res.status(500).json({ message: "Erro ao listar usuários" });
  }
};

const login = async (rec, res) => {
  const { email, senha } = rec.body;
  try {
    const user = await Usuario.findOne({ where: { email }, raw: true });
    if (!user) {
      return res.status(401).json({ message: "usuario não encontrado" });
    }

    const senhaCorreta = await bcrypt.compare(senha, user.senha);

    if (!senhaCorreta) {
      return res.status(401).json({ message: "Senha incorreta" });
    }

    res.status(200).json({ message: "Login realizado com sucesso!" });
  } catch (err) {
    res.status(500).json({ message: "Erro ao fazer login" });
  }
};

module.exports = { cadastrar, listar, login };
