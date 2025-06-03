const database = require("../database/config");

// DASH 1: Contar quantidade de carros por Marca
function obterMarcas() {
    const instrucao = `
        SELECT Marca, COUNT(*) AS quantidade
        FROM cadastroCarro
        GROUP BY Marca
        ORDER BY quantidade DESC;
    `;
    return database.executar(instrucao);
}



// DASH 2: Contar carros por Ano de fabricação
function obterAnosFabricacao() {
    const instrucao = `
        SELECT dtFabri AS ano, COUNT(*) AS quantidade
        FROM cadastroCarro
        GROUP BY dtFabri
        ORDER BY dtFabri ASC;
    `;
    return database.executar(instrucao);
}

// DASH 3: Contar carros por Tipo de Combustível
function obterCombustiveis() {
    const instrucao = `
        SELECT tipoCombustivel AS combustivel, COUNT(*) AS quantidade
        FROM cadastroCarro
        GROUP BY tipoCombustivel
        ORDER BY quantidade DESC;
    `;
    return database.executar(instrucao);
}

// DASH 4: Contar usuários por Nível no quiz
function obterNiveisQuiz() {
    const instrucao = `
        SELECT nivel, COUNT(*) AS quantidade
        FROM quiz
        GROUP BY nivel
        ORDER BY quantidade DESC;
    `;
    return database.executar(instrucao);
}

module.exports = {
    obterMarcas,
    obterAnosFabricacao,
    obterCombustiveis,
    obterNiveisQuiz
};
