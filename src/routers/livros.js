const express = require("express");
const routers = express.Router();
const controllers = require("../controllers/livros");
const autorizar = require("../services/auth-service");

routers.get("/", controllers.listarLivros);
routers.get("/:id", controllers.buscarUmLivro);
routers.delete("/:id", autorizar.autorizar, controllers.excluirLivro);
routers.post("/", autorizar.autorizar, controllers.criarLivro);
routers.put("/:id", autorizar.autorizar, controllers.atualizarLivro);

module.exports = routers;