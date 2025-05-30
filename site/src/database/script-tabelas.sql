create database carmod;
use carmod;

CREATE TABLE usuario (
    id INT PRIMARY KEY auto_increment,
    Nome VARCHAR(45),
    email VARCHAR(45),
     senha VARCHAR(45),
    Estado VARCHAR(45)
);



CREATE TABLE cadastroCarro (
    idCarro INT PRIMARY KEY AUTO_INCREMENT,
    fkusuario INT,
    Marca VARCHAR(45),
    Modelo VARCHAR(45),
    dtFabri YEAR,
    tipoCombustivel VARCHAR(45),
    FOREIGN KEY (fkusuario) REFERENCES usuario(id)
);


CREATE TABLE quiz (
    idquiz INT PRIMARY KEY AUTO_INCREMENT,
    fkusuario INT,
    pontuacao INT,
    nivel VARCHAR(20),
    FOREIGN KEY (fkusuario) REFERENCES usuario(id)
);


select * from quiz;










