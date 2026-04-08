const Usuario = require("../models/Usuario")
const bcrypt = require("bcrypt")
const { hashPassword } = require("../service/bcrypt.service");

const cadastrar =  async(rec, res) =>{
    const valores = rec.body
    console.log(valores)

    try{
        const senhaHash = await hashPassword(valores.senha)
        const user = await Usuario.create({
            ...valores,
            senha: senhaHash,
        })
        // rec.status(200).json(user)
    } catch (error) {
        console.error("erro ao cadastrar usuario: ", error)
        res.status(500).json({ message: "erro ao cadastrar o usuario" })
    }

}

const listar = async ( rec, res ) => {
    try {
        const users = await Usuario.findAll({ raw:true })
        res.status(200).json(users)
    } catch(error){
        console.error("erro ao listar os usuarios", error)
        res.status(500).json({ message: "Erro ao listar usuários" });
    }
}

module.exports = { cadastrar, listar }