const express = require("express");
const router = express.Router();

const dashController = require("../controllers/dashController");

// Rotas para o dashboard
router.get("/api/marcas", dashController.listarMarcas);
router.get("/api/anos", dashController.listarAnos);
router.get("/api/combustiveis", dashController.listarCombustiveis);
router.get("/api/quiz_niveis", dashController.listarNiveisQuiz);

module.exports = router;
