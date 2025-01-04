const fs = require("fs");

const getTodosLivros = (req, res) => {
    res.send(JSON.parse(fs.readFileSync("livros.json")))
}

module.exports = {
    getTodosLivros
}