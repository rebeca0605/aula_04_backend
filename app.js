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

// Endpoint com o parâmetro de UF para a função 2
app.get('/v1/estado/:uf', function (request, response) {
    let sigla = request.params.uf

    let estado = dados.getEstadoBySigla(sigla)

    //retorna o status code
    response.status(estado.status_code)
    //retorna o JSON
    response.json(estado)
})

// Endpoint com o parâmetro de UF para a função 3
app.get('/v1/capital/:uf', function (request, response) {
    let sigla = request.params.uf

    let capital = dados.getCapitalBySigla(sigla)

    //retorna o status code
    response.status(capital.status_code)
    //retorna o JSON
    response.json(capital)
})

// Endpoint com o parâmetro de UF para a função 4
app.get('/v1/estados/:regiao', function (request, response) {
    let regiao = request.params.regiao

    let estados = dados.getEstadoByRegiao(regiao)

    //retorna o status code
    response.status(estados.status_code)
    //retorna o JSON
    response.json(estados)
})

// Endpoint com o parâmetro de UF para a função 5
app.get('/v1/capitais', function (request, response) {
    let capitais = dados.getVerifyCapitaisDoPais()

    response.status(capitais.status_code)
    response.json(capitais)
})

// Endpoint com o parâmetro de UF para a função 6
app.get('/v1/cidades/:uf', function (request, response) {
    let sigla = request.params.uf

    let cidades = dados.getCidadesBySigla(sigla)

    //retorna o status code
    response.status(cidades.status_code)
    //retorna o JSON
    response.json(cidades)
})

//Start na API
app.listen(PORT, function(){
    console.log('API aguardando requisições...')
})