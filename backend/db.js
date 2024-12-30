const express = require("express");

const app = express();

const PORT = 8000;


app.get('/api', (req, res) => {

        res.send("Hello World")

});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});