const { Router } = require("express");
const { getLivros, postLivros, patchLivros, deleteLivros } = require("../controladores/livros");
const { getTodosLivros } = require("../servicos/livros");

const router = Router();

router.get("/", getTodosLivros);

router.post("/", postLivros);

router.patch("/", patchLivros);

router.delete("/", deleteLivros);


module.exports = router