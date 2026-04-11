const { DataTypes } = require("sequelize");
const db = require("../db/conn");

const Usuario = db.define(
  "usuario",
  {
    cod: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING(40),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    senha: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  },
  {
    timeStamps: true
  },
);

module.exports = Usuario;
