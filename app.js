/***************************************************************************************************************************************
 * Objetivo: Endpoints referente a API de estados e dados
 * Data: 15/09/2025
 * Autor: Rebeca Gomes
 * Versão: 1.0
 * 
 * Obs: intalação do Express, Cors, Body-Parser
 * npm install express --save
 * npm install cors express --save
 * npm install body-parser --save
 ***************************************************************************************************************************************/

const express = require('express') //Responsável pela API
const cors = require('cors') //Responsável pelas permissões da API (app)
const bodyParser = require('body-parser') //Responsável por gerenciar a chegada dos dados da API com o Front-End

//Import do arquivo de funções
const dados = require('./module/funcoes.js')

//Retorna a porta do sevidor atual ou colocamos uma porta local
const PORT = process.PORT || 8080

//Criando uma instância de uma classe do express
const app = express()

//Configuração de permissões
app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*') //Servidor de origem da API
    response.header('Access-Control-Allow-Methods', 'GET') //Verbos permitidos da API (verbo são as requisições)

    //Carrega as configurações no cors da API 
    app.use(cors())
    next() // Próximo, carregar os próximos endpoints
})

//Request -> chegada de dados na API
//Response -> retorno de dados na API

//EndPoints

app.get('/v1/estados', function(request, response){
    //Pesquisa na função de estados 
    let estados = dados.getAllEstados()

    //Retorna o status code
    response.status(estados.status_code)

    //retorna o JSON
    response.json(estados)
})

app.get('/v1/estado/:uf', function(request, response){
    let sigla = request.params.uf
    console.log(sigla)
})

// app.get('/v1/estados/regiao/:id', function(request, response){
//     let sigla = request.query.uf
//     let estado = request.query.estado
//     let regiao = request.query.regiao
//     let id = request.params.id
//     console.log(sigla)
//     console.log(estado)
//     console.log(regiao)
//     console.log(id)
// })

//Start na API
app.listen(PORT, function(){
    console.log('API aguardando requisições...')
})