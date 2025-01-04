const fs = require("fs");

const livros = JSON.parse(fs.readFileSync("livros.json"));

const getLivros = (req, res) => {
    try{
        
        res.send(livros);
    }
    catch(error){
        res.status(500);
        res.send(error.message);
    }
    

};

const postLivros = (req, res) => {
    try{
        res.send("Voce fes uma requisição usando POST");
    }catch(error){
        res.status(500);
        res.send(error.message)
    }
}

const patchLivros = (req, res) => {
    try{
        res.send("Voce fez um requisição usando PATH");
    }catch(error){
        res.status(500);
        res.send("Error interno detechtado");
    }
}

const deleteLivros = (req, res) => {
    try{
        res.send("Voce fez uma requisição DELETE");
    }catch(error){
        res.status(500);
        res.send("Erro interno detectado");
    }
}

module.exports = {
    getLivros,
    postLivros,
    patchLivros,
    deleteLivros
}