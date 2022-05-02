const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pokemonSchema = new Schema({
    nome: String,
    elemento: String,
    estatistica: {
        vida: Number,
        defesa: Number
    },
    habilidades: [
        {
            nome: String,
            dano: Number
        }
    ],
});

module.exports = mongoose.model("Pokemons", pokemonSchema)
