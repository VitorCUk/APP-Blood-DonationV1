// configurando o servidor

const express = require("express");
const server = express();

// configurar o servidor para apresentar arquivos estaticos

server.use(express.static("CSS"))


// configuracao o templet engine 

const nunjucks = require("nunjucks")
nunjucks.configure("./", {
    express: server
})



// Agrupamento de dados  - Com Array
// Lista de doadores 

const donors = [{
        nome: "Vitor Correia",
        blood: "AB+"
    },
    {
        nome: "Carla Balula",
        blood: "A+"
    },
    {
        nome: "Roberto Oliveira",
        blood: "O-"
    },
    {
        nome: "Jao Oliveira",
        blood: "O+"
    },
]





// configurar apresentacao da pagina
// Aqui estou a chamar o HTML
server.get("/", function(req, res) {
    return res.render("index.html", { donors })

})


// ligar o servidor e permitir o acesso na porta 3000
server.listen(3000, function() {
    console.log("Servidor iniciado")
});