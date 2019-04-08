

const Usuario = require("../models/usuarios");
const Status = require("http-status");
const authService = require("../services/auth-service");
const criptografarSenha = require("../services/criptografarSenha");

exports.autenticar = (req,res,next)=>{
    const dados = req.body;
    Usuario.findAll({
        where : {
            email: dados.email,
            senha: dados.senha
        }
    }).then((usuario)=>{
        let token = authService.geraToken({id: usuario[0].id, email: usuario[0].email});
        console.log(token);
        res.status(Status.OK).send(token);
    }).catch((erro)=>{
        res.status(Status.UNAUTHORIZED).send({mensagem : "Usuário e senha inválidos"});
    });
};

exports.listarUsuarios = (req,res,next)=>{
    Usuario.findAll({attributes: ['id','email', 'senha']}).then((usuarios)=>{
        res.status(Status.OK).send(usuarios);
        console.log(usuarios);
    }).catch((erro)=>{
        next(erro);
    });
};

exports.buscarUmUsuario = (req,res,next)=>{
    let id = parseInt(req.params.id);
    Usuario.findById(id).then((usuario)=>{
        if (usuario){
            res.status(Status.OK).send(usuario);
        }else{
            res.status(Status.NOT_FOUND).send();
        }
    }).catch((erro)=>{
        next(erro);
    });
};

exports.criarUsuario = (req,res,next)=>{
    const usuario = req.body;
    console.log(usuario.senha);
    usuario.senha = criptografarSenha.criptografar(usuario.senha);

    //const idsUsuarios = livro.usuarios;
    Usuario.create(usuario).then((novoUsuario)=>{
        //novoUsuario.setUsuarios(idsUsuarios).then().catch();
        res.status(Status.CREATED).send();
    }).catch((erro)=>{
        next(erro);
    });
};
/*
exports.criarAutor = (req,res,next)=>{
    let autor = req.body;
    Autor.create(autor).then((novoAutor)=>{
        res.status(Status.CREATED).send();
    }).catch((erro)=>{
        next(erro);
    });
};
*/

exports.excluirUsuario = (req,res,next) => {
    let id = parseInt(req.params.id);
    Usuario.findById(id).then((usuario)=>{
        if (usuario){
            Usuario.destroy({ where: {id : id}}).then(()=>{
                res.status(Status.OK).send();
            }).catch((erro)=>{
                next(erro);
            });
        }else{
            res.status(Status.NOT_FOUND).send();
        }
    }).catch((erro)=>{
        next(erro);
    });
};


exports.atualizarUsuario = (req,res,next)=>{
    let id = parseInt(req.params.id);
    let usuarioBody = req.body;
    if (!usuarioBody || !id){
        res.status(Status.NO_CONTENT).send();
    }else{
        Usuario.findById(id).then((usuario)=>{
            if (usuario){
                Usuario.update({nome: usuarioBody.nome, email : usuarioBody.email, senha : usuarioBody.email},{where : {id : id}}).then(()=>{
                    res.status(Status.OK).send();
                }).catch((erro)=>{
                    next(erro);
                });
            }else{
                res.status(Status.NOT_FOUND).send();
            }
        }).catch((erro)=>{
            next(erro);
        });
    }
};
