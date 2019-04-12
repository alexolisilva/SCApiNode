
const express = require("express");
const fs = require("fs");

const app = express();

app.post("/arquivo",(req,res,next)=>{
    //let conteudo = req.body;
    var dadosOrigem = req.headers;    
    req.pipe(fs.createWriteStream(dadosOrigem ["nome"] + "recebido2.jpg")).on("finish",(erro)=>{
        res.status(200).send();
    });    
});

app.listen("3000",()=>{
    console.log("Funcionando");
});