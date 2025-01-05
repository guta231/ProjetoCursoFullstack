const { getLivroPorId, getTodosLivros, insereLivro, editarLivro, deletarLivros } = require("../servicos/livros");


const getLivros = (req, res) => {
    try{
        res.send(getTodosLivros());
    }catch(error){
        res.status(500);
        res.send("Erro interno");
    }
}

const getLivro = (req, res) => {
    try{
        const id = req.params.id;

        if (id && Number(id)){
            const livro = getLivroPorId(id);
            res.send(livro);
        }else{
            res.status(422);
            res.send("id inválido");
        }
        
        
    }
    catch(error){
        res.status(500);
        res.send(error.message);
    }

};



const postLivros = (req, res) => {
    try{
        const newLivro = req.body;
        insereLivro(newLivro);
        res.status(201);
        res.send("livro inserido com sucesso");
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
}

const patchLivros = (req, res) => {
    try{
        const id = req.params.id
        if (id && Number(id)){
            const modificacoes = req.body;
            editarLivro(modificacoes, id);
            res.send("Livro editado com sucesso");
        }else{
            res.status(422);
            res.send("id inválido");
        }
        
    }catch(error){
        res.status(500);
        res.send("Error interno detectado");
    }
}

const deleteLivros = (req, res) => {
    try{
        id = req.params.id;
        if (id && Number(id)){
            deletarLivros(id);
            res.status(204);
            res.send("Livro deletado com sucesso");
        }else{
            res.status(422);
            res.send("id inválido");
        }
        
    }catch(error){
        res.status(500);
        res.send("Erro interno detectado");
    }
}

module.exports = {
    getLivros,
    postLivros,
    patchLivros,
    deleteLivros,
    getLivro
}