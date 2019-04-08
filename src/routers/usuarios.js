const express = require("express");
const routers = express.Router();
const controllers = require("../controllers/usuarios");
const autorizar = require("../services/auth-service");

routers.post("/",controllers.autenticar);

routers.get("/", controllers.listarUsuarios);
routers.get("/:id", controllers.buscarUmUsuario);
routers.post("/", controllers.criarUsuario);
routers.delete("/:id",autorizar.autorizar, controllers.excluirUsuario);
routers.put("/:id", controllers.atualizarUsuario);


module.exports = routers;
