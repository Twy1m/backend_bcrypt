const DataTypes = require("sequelize");
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
      alowNull: false,
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
    timeStamps: true,
    tableName: "usuario",
  },
)

module.exports = Usuario;
