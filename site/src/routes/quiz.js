var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.post("/cadastrarResultado/:id", function (req, res) {
    quizController.cadastrarResultado(req, res);
});

module.exports = router;