const pokemonModel = require("../model/pokemonModel.js");

exports.savePokemon = function(req, res){
    novoPokemon = req.body;
    pokemonModel.create(novoPokemon, function(erro, dados) {
        if(erro)
          return res.send({ mensagem: '[ERRO]: não foi possível inserir no BD'});
        return res.send({ mensagem: '[SUCESSO]: produto adicionado' });
      })
}

exports.findPokemon = function(req, res){
    console.log(req.query);
    pokemonModel.find({},  function(erro, dados) {
        if(erro) {
          return res.send({ mensagem: '[ERRO]: Busca de produtos'});
        } else {
          let numPokemon1;
          let numPokemon2;
          numPokemon1 = pokeRandom(0, dados.length - 1)
          numPokemon2 = pokeRandom(0, dados.length - 1)
          console.log(numPokemon1)
          console.log(numPokemon2)
          let doisPokemons = [];
          doisPokemons.push(dados[numPokemon1])
          doisPokemons.push(dados[numPokemon2])
          return res.send(doisPokemons);
        }
      })
}

function pokeRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }