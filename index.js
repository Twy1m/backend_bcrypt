const express = require("express");
const app = express();
const cors = require("cors");

const PORT = 3000;
const hostname = "localhost";

const conn = require("./db/conn");
const usuarioController = require("./controller/usuario.controller");
const autenticar = require("./middleware/auth")

//------MiddleWare-----

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

//---------------------

app.post("/login", usuarioController.login);
app.post("/usuarios", usuarioController.cadastrar);
app.get("/usuarios", autenticar, usuarioController.listar)


app.get("/", (rec, res) => {
  res.status(200).json({ message: "aplicação rodando" });
});

//----------

conn
  .sync()
  .then(() => {
    app.listen(PORT, hostname, () => {
      console.log("server rodando em: ", hostname, ":", PORT);
    });
  })
  .catch((error) => {
    console.error("Não foi possivel conectar com o banco de dados!");
  });
