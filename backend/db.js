const express = require("express");
const rotaLivros = require("./rotas/rotaLivros");


const app = express();
app.use(express.json());

const PORT = 8000;


app.use("/livros", rotaLivros);





app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});