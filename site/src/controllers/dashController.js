const dashModel = require("../models/dashModel");

// DASH 1 - Marcas de carros
function listarMarcas(req, res) {
    dashModel.obterMarcas()
        .then(resultado => {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhuma marca encontrada!");
            }
        })
        .catch(erro => {
            console.log("Erro ao buscar marcas:", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

// DASH 2 - Anos de fabricação
function listarAnos(req, res) {
    dashModel.obterAnosFabricacao()
        .then(resultado => {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum ano encontrado!");
            }
        })
        .catch(erro => {
            console.log("Erro ao buscar anos:", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

// DASH 3 - Tipos de combustível
function listarCombustiveis(req, res) {
    dashModel.obterCombustiveis()
        .then(resultado => {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum combustível encontrado!");
            }
        })
        .catch(erro => {
            console.log("Erro ao buscar combustíveis:", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

// DASH 4 - Níveis de quiz
function listarNiveisQuiz(req, res) {
    dashModel.obterNiveisQuiz()
        .then(resultado => {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum nível encontrado!");
            }
        })
        .catch(erro => {
            console.log("Erro ao buscar níveis:", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    listarMarcas,
    listarAnos,
    listarCombustiveis,
    listarNiveisQuiz
};
