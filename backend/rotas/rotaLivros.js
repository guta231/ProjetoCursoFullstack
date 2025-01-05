const { Router } = require("express");
const { getLivros, getLivro, postLivros, patchLivros, deleteLivros } = require("../controladores/livros");


const router = Router();

router.get("/:id", getLivro);

router.get("/", getLivros);

router.post("/", postLivros);

router.patch("/:id", patchLivros);

router.delete("/:id", deleteLivros);


module.exports = router