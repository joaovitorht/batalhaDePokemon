const express = require('express');
const cors = require('cors')
const api = express();
api.use(cors())
api.use(express.json());
require('dotenv').config();
const porta = process.env.PORTA_API;
const enderecoBanco = process.env.URL_BD;
const mongoose = require('mongoose');

const pokemonController = require("./controller/pokemonController.js");

mongoose.connect(enderecoBanco);

mongoose.connection.on('connected', function() {
    console.log('[AVISO]: Aplicação conectada ao BD!');
});

mongoose.connection.on('disconnected', function() {
    console.log('[AVISO]: Aplicação desconectada ao BD!');
});

mongoose.connection.on('error', function(erro) {
    console.log('[ERRO]: Erro ao conectar ao BD!');
    console.log(erro);
});


api.listen(porta, function() {
    console.log('API rodando na porta ' + porta);
});

api.get("/pokemon", pokemonController.findPokemon);

api.post("/pokemon", pokemonController.savePokemon);




