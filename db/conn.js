const Sequelize = require("sequelize"); //Define a classe Sequelize para criar a conexão com o banco de dados
const db = new Sequelize("db_test2", "postgres", "senai", {
  //Passa os parametros para a conexão: nome do banco, usuario e senha, depois um objeto com as configurações do banco, host, dialeto e porta
  host: "localhost",
  dialect: "postgres",
  port: 5432,
});

// autentica a conexão com o banco
// db.authenticate()
// .then(()=>{
//     console.log('Conexão feita com o banco de dados')
// })
// .catch((err)=>{
//     console.error('Não foi possível conectar com o banco de dados: ', err)
// })

module.exports = db;
