var database = require("../database/config");

function cadastrarCarro(fkusuario, marca, modelo, dtFabri, tipoCombustivel) {
    var instrucaoSql = `
        INSERT INTO cadastroCarro (fkusuario, marca, modelo, dtFabri, tipoCombustivel) 
        VALUES (${fkusuario}, '${marca}', '${modelo}', '${dtFabri}', '${tipoCombustivel}');
    `;
    console.log("Executando SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrarCarro
};
