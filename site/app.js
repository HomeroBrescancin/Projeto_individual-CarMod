// Defina o ambiente (desenvolvimento ou produção)
// Melhor usar variável de ambiente para flexibilizar
var ambiente_processo = process.env.AMBIENTE_PROCESSO || 'desenvolvimento';

// Define qual arquivo .env carregar com base no ambiente
var caminho_env = ambiente_processo === 'producao' ? '.env' : '.env.dev';

// Carregando variáveis de ambiente
require("dotenv").config({ path: caminho_env });

var express = require("express");
var cors = require("cors");
var path = require("path");

// Importando rotas
var indexRouter = require("./src/routes/index");
var usuarioRouter = require("./src/routes/usuarios");
var carroRouter = require("./src/routes/carros");
var quizRouter = require("./src/routes/quiz");  
var dashRouter = require("./src/routes/dash"); 

// Porta e host via .env ou padrão
var PORTA_APP = process.env.APP_PORT || 3000;
var HOST_APP = process.env.APP_HOST || 'localhost';

var app = express();

// Middlewares para interpretar JSON e dados de formulário
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Servir arquivos estáticos da pasta "public"
app.use(express.static(path.join(__dirname, "public")));

// Habilita CORS para requisições cross-origin
app.use(cors());

// Rotas da aplicação
app.use("/", indexRouter);
app.use("/usuarios", usuarioRouter);
app.use("/carros", carroRouter);
app.use("/quiz", quizRouter);  
app.use("/dash", dashRouter);

// Inicia o servidor
app.listen(PORTA_APP, function () {
    console.log(`
  
  ####     ##    #####   ##     ##   ######   ####
 ##  ##   ####   ##  ##  ###   ###  ##    ##  ## ##
##       ##  ##  ##  ##  #### ####  ##    ##  ##  ##
##       ######  #####   ## ### ##  ##    ##  ##  ##  
##       ##  ##  ####    ##     ##  ##    ##  ##  ##
 ##  ##  ##  ##  ## ##   ##     ##  ##    ##  ## ##
  ####   ##  ##  ##  ##  ##     ##   ######   ###
                                           
Servidor rodando em: http://${HOST_APP}:${PORTA_APP}

Ambiente: ${ambiente_processo}

Se ambiente for 'desenvolvimento', conecta no banco local.
Se ambiente for 'producao', conecta no banco remoto.

Para alterar o ambiente, defina a variável de ambiente AMBIENTE_PROCESSO no arquivo .env
`);
});
