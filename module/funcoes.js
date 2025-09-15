/***************************************************************************************************************************************
 * Objetivo: Arquivo de funções para gerenciar a API de estados e cidades.
 * Data: 15/09/2025
 * Autor: Rebeca Gomes
 * Versão: 1.0
 ***************************************************************************************************************************************/
const MESSAGE_ERRO = {status: false, status_code: 500, development: 'Rebeca Gomes.'}
const dados = require('./estados_cidades.js')

//Retorna todos os estados
const getAllEstados = function(){
    let message = {status: true, status_code: 200, development: 'Rebeca Gomes', uf: []}

    dados.listaDeEstados.estados.forEach(function(item){
        message.uf.push(item.sigla)
    })

    message.quantidade = message.uf.length

    if(message.uf.length > 0)
        return message //Saída verdadeira 200
    else
        return MESSAGE_ERRO //Saída falsa 500
}

//Retorna um estado pesquisando pela sigla
const getEstadoBySigla = function(sigla){

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

// console.log(getAllEstados())

module.exports = {
    getAllEstados
}