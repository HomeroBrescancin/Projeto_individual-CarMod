var carroModel = require("../models/carroModel");

function cadastrarCarro(req, res) {
    var fkusuario = req.body.fkusuario;
    var marca = req.body.marca;
    var modelo = req.body.modelo;
    var dtFabri = req.body.dtFabri;
    var tipoCombustivel = req.body.tipoCombustivel;

    if (!fkusuario) {
        res.status(400).send("O id do usuário está undefined!");
        return;
    }
    if (!marca) {
        res.status(400).send("A marca está undefined!");
        return;
    }
    if (!modelo) {
        res.status(400).send("O modelo está undefined!");
        return;
    }
    if (!dtFabri || isNaN(dtFabri) || dtFabri.toString().length !== 4) {
        res.status(400).send("A data de fabricação está inválida!");
        return;
    }
    if (!tipoCombustivel) {
        res.status(400).send("O tipo de combustível está undefined!");
        return;
    }

    carroModel.cadastrarCarro(fkusuario, marca, modelo, dtFabri, tipoCombustivel)
        .then(resultado => {
            res.json(resultado);
        }).catch(erro => {
            console.error(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    cadastrarCarro
};