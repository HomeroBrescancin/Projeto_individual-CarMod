var database = require("../database/config");

function cadastrarResultado(idusuario, pontuacaoTotal, nivel) {
  console.log(
    "ACESSEI O QUIZ MODEL \n function cadastrar():",
    idusuario,
    pontuacaoTotal,
    nivel
  );

  var instrucaoSql = `
    INSERT INTO quiz (fkusuario, pontuacao, nivel)
    VALUES (${idusuario}, ${pontuacaoTotal}, '${nivel}');
  `;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}



module.exports = {
  cadastrarResultado,
};