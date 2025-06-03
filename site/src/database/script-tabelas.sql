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

INSERT INTO usuario (Nome, email, senha, Estado) VALUES
('Ana Lima', 'ana@exemplo.com', 'senha123', 'SP'),
('Bruno Souza', 'bruno@exemplo.com', 'senha123', 'RJ'),
('Carla Mendes', 'carla@exemplo.com', 'senha123', 'MG'),
('Diego Rocha', 'diego@exemplo.com', 'senha123', 'BA'),
('Eduarda Martins', 'eduarda@exemplo.com', 'senha123', 'PR'),
('Felipe Castro', 'felipe@exemplo.com', 'senha123', 'SC'),
('Gustavo Tavares', 'gustavo@exemplo.com', 'senha123', 'RS'),
('Helena Ribeiro', 'helena@exemplo.com', 'senha123', 'PE'),
('Igor Almeida', 'igor@exemplo.com', 'senha123', 'GO'),
('Juliana Azevedo', 'juliana@exemplo.com', 'senha123', 'AM'),
('Kaique Nunes', 'kaique@exemplo.com', 'senha123', 'CE');

INSERT INTO cadastroCarro (fkusuario, Marca, Modelo, dtFabri, tipoCombustivel) VALUES
(1, 'Chevrolet', 'Onix', 2019, 'Gasolina'),
(2, 'Fiat', 'Argo', 2020, 'Álcool'),
(3, 'Ford', 'Ka', 2018, 'Diesel'),
(4, 'Honda', 'Civic', 2021, 'Flex'),
(5, 'Hyundai', 'HB20', 2022, 'GNV'),
(6, 'Jeep', 'Renegade', 2023, 'Elétrico'),
(7, 'Nissan', 'Versa', 2017, 'Gasolina'),
(8, 'Peugeot', '208', 2020, 'Álcool'),
(9, 'Renault', 'Sandero', 2016, 'Diesel'),
(10, 'Toyota', 'Corolla', 2021, 'Flex'),
(11, 'Volkswagen', 'Gol', 2019, 'GNV');


INSERT INTO quiz (fkusuario, pontuacao, nivel) VALUES
(1, 9, 'Profissional'),
(2, 4, 'Mediano'),
(3, 2, 'Noob'),
(4, 10, 'Profissional'),
(5, 6, 'Mediano'),
(6, 1, 'Noob'),
(7, 8, 'Profissional'),
(8, 5, 'Mediano'),
(9, 3, 'Noob'),
(10, 7, 'Mediano'),
(11, 10, 'Profissional');















