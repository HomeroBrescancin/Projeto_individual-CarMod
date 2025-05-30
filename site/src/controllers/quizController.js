var quizModel = require("../models/quizModel");

function cadastrarResultado(req, res) {
  var idusuario = req.params.id;
  var pontuacaoTotal = req.body.acertos;

  let nivel = "";
  if (pontuacaoTotal <= 3) {
    nivel = "Noob";
  } else if (pontuacaoTotal >= 4 && pontuacaoTotal <= 6) {
    nivel = "Mediano";
  } else if (pontuacaoTotal > 6) {
    nivel = "Profissional";
  }

  quizModel
    .cadastrarResultado(idusuario, pontuacaoTotal, nivel)
    .then(function (resultado) {
      res.json({ mensagem: "Resultado cadastrado com sucesso!", resultado });
    })
    .catch(function (erro) {
      console.log(erro);
      res.status(500).json({ erro: erro.sqlMessage });
    });
}

module.exports = {
  cadastrarResultado,
};