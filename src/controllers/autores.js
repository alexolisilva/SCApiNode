

const Autor = require("../models/autores");
const Status = require("http-status");

exports.listarAutores = (req,res,next)=>{
    Autor.findAll({attributes: ["id","nome"]}).then((autores)=>{
        res.status(Status.OK).send(autores);
    }).catch((erro)=>{
        next(erro);
    });
};

exports.criarAutor = (req,res,next)=>{
    let autor = req.body;
    Autor.create(autor).then((novoAutor)=>{
        res.status(Status.CREATED).send();
    }).catch((erro)=>{
        next(erro);
    });
};

exports.atualizarAutor = (req,res,next)=>{
    let id = parseInt(req.params.id);    
    let autorBody = req.body;    
    if (!autorBody || !id){
        res.status(Status.NO_CONTENT).send();
    }else{
        Autor.findById(id).then((autor)=>{
            if (autor){
                Autor.update({nome: autorBody.nome, descricao : autorBody.descricao},{where : {id : id}}).then(()=>{
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
