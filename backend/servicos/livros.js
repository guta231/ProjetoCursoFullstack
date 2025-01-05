const fs = require("fs");


const getTodosLivros = () => {
    return JSON.parse(fs.readFileSync("livros.json"));
}

const getLivroPorId = (id) => {
    const livros = getTodosLivros();
    const livroId = livros.filter(livro => id === livro.id)[0]
    return livroId;
}

const insereLivro = (newLivro) => {
    const livros = JSON.parse(fs.readFileSync("livros.json"));
    fs.writeFileSync("livros.json", JSON.stringify([...livros, newLivro]));
    
}

const editarLivro = (modificacoes, id) => {
    let livros = JSON.parse(fs.readFileSync("livros.json"));
    const indiceModificado = livros.findIndex(livro => livro.id == id )
    const conteudoMudado = {...livros[indiceModificado], ...modificacoes}
    livros[indiceModificado] = conteudoMudado
    fs.writeFileSync("livros.json", JSON.stringify(livros));
}

const deletarLivros = (id) => {
    let livros = JSON.parse(fs.readFileSync("livros.json"));
    const indiceLivro = livros.findIndex(livro => livro.id == id);
    livros.splice(indiceLivro, 1);
    fs.writeFileSync("livros.json", JSON.stringify(livros));

}

module.exports = {
    getTodosLivros,
    getLivroPorId,
    insereLivro,
    editarLivro,
    deletarLivros
}