/***************************************************************************************************************************************
 * Objetivo: Arquivo de funções para gerenciar a API de estados e cidades.
 * Data: 15/09/2025
 * Autor: Rebeca Gomes
 * Versão: 1.0
 ***************************************************************************************************************************************/
const MESSAGE_ERRO = {status: false, status_code: 500, development: 'Rebeca Gomes.'}

//Import do arquivo de estados e cidades
const dados = require('./estados_cidades.js')

//Retorna todos os estados
const getAllEstados = function(){
    //Variável de base para o cabeçalho da API
    let message = {status: true, status_code: 200, development: 'Rebeca Gomes', uf: []}

    dados.listaDeEstados.estados.forEach(function(item){
        message.uf.push(item.sigla)
    })

    //Para adicionar um elemento novo no JSON
    message.quantidade = message.uf.length

    //Para remover um atributo do JSON
    //delete message.status

    if(message.uf.length > 0)
        return message //Saída verdadeira 200
    else
        return MESSAGE_ERRO //Saída falsa 500
}

//Retorna um estado pesquisando pela sigla
const getEstadoBySigla = function(sigla){
    //Variável de base para o cabeçalho da API
    let message = {status: true, status_code: 200, development: 'Rebeca Gomes', }

    let estado = dados.listaDeEstados.estados.find(function(item){
        return item.sigla.toLowerCase() === sigla.toLowerCase()
    })

    message.uf = estado.sigla
    message.nome = estado.nome
    message.capital = estado.capital
    message.regiao = estado.regiao
}

//Retorna a capital referente a um estado pesquisando pela sigla
const getCapitalBySigla = function(sigla){

}

//Retorna uma lista de estados pesquisando pela região
const getEstadoByRegiao = function(regiao){

}

//Retorna uma lista de estado referente as capitais do país
const getVerifyCapitaisDoPais = function(){

}

//Retorna uma lista de cidades pesquisando pela sigla do estado
const getCidadesBySigla = function(sigla){

}

getEstadoBySigla('sp')

// console.log(getAllEstados())

module.exports = {
    getAllEstados
}