var lifePokemon1 = document.getElementById("life-pokemon-1")
var lifePokemon2 = document.getElementById("life-pokemon-2");
var barraDeVidaNumeroPokemon1 = document.getElementById("barra-vida-numero-pokemon-1");
var barraDeVidaNumeroPokemon2 = document.getElementById("barra-vida-numero-pokemon-2");

var selectPokemon = document.getElementById("select-pokemon");
var pokemons = []

var pokemon1;
var pokemon2;

var vidaPokemon1;
var vidaPokemon2;

var elementoPokemon1 = document.getElementById("skills-pokemon-1")
var elementoPokemon2 = document.getElementsByClassName("skills-pokemon-2")



/* COLOCAR ATKS DO POKEMON 0 Q É O CHARMANDER   */
var skill1Pokemon1 = document.getElementById("skill-1-pokemon-1")
var skill2Pokemon1 = document.getElementById("skill-2-pokemon-1")
var skill3Pokemon1 = document.getElementById("skill-3-pokemon-1")
var skill4Pokemon1 = document.getElementById("skill-4-pokemon-1")
var nomePokemon1 = document.getElementById("nome-pokemon-1")

function inserirNomeAtaquePokemon1(pokemon){
    console.log(pokemon)
    skill1Pokemon1.textContent = pokemon.habilidades[0].nome
    skill2Pokemon1.textContent = pokemon.habilidades[1].nome
    skill3Pokemon1.textContent = pokemon.habilidades[2].nome
    skill4Pokemon1.textContent = pokemon.habilidades[3].nome
    nomePokemon1.textContent = pokemon.nome
    barraDeVidaNumeroPokemon1.textContent = pokemon.estatistica.vida
    vidaPokemon1 = pokemon.estatistica.vida
}

/* COLOCAR ATKS DO POKEMON 1 Q É O PIKACHU   */
var skill1Pokemon2 = document.getElementById("skill-1-pokemon-2")
var skill2Pokemon2 = document.getElementById("skill-2-pokemon-2")
var skill3Pokemon2 = document.getElementById("skill-3-pokemon-2")
var skill4Pokemon2 = document.getElementById("skill-4-pokemon-2")
var nomePokemon2 = document.getElementById("nome-pokemon-2")

function inserirNomeAtaquePokemon2(pokemon){
    console.log(pokemon)
    skill1Pokemon2.textContent = pokemon.habilidades[0].nome
    skill2Pokemon2.textContent = pokemon.habilidades[1].nome
    skill3Pokemon2.textContent = pokemon.habilidades[2].nome
    skill4Pokemon2.textContent = pokemon.habilidades[3].nome
    nomePokemon2.textContent = pokemon.nome
    barraDeVidaNumeroPokemon2.textContent = pokemon.estatistica.vida
    vidaPokemon2 = pokemon.estatistica.vida
    elementoPokemon2 = pokemon.elemento
    if(pokemon.elemento == "planta"){
        elementoPokemon1("green")
    }else if(pokemon.elemento == "fogo"){
        elementoPokemon1("red")
    }
}

function elementoPokemon1(corElemento){
    skill1Pokemon1.style.background = corElemento
    skill2Pokemon1.style.background = corElemento
    skill3Pokemon1.style.background = corElemento
    skill4Pokemon1.style.background = corElemento
}

function elementoPokemon2(corElemento){
    skill1Pokemon2.style.background = corElemento
    skill2Pokemon2.style.background = corElemento
    skill3Pokemon2.style.background = corElemento
    skill4Pokemon2.style.background = corElemento
}

/*==== PEGAR OS POKEMON NO BANCO DE DADOS  */
function buscarPokemon(){
    fetch("http://localhost:3000/pokemon")
    .then(function(data){
        return data.json()        
    }).then(function(data){
        console.log(data)
        pokemons = data
        
        pokemon1 = pokemons[1]
        pokemon2 = pokemons[0]
        inserirNomeAtaquePokemon1(pokemons[1])
        inserirNomeAtaquePokemon2(pokemons[0])
        selectPokemon.classList.add("esconder")
    })
}
/*======== ATAQUE DO POKEMON DO LADO ESQUERDO < ==== */
function ataquePokemon1(posicaoAtaque){
    skill1Pokemon2.disabled = false
    skill2Pokemon2.disabled = false
    skill3Pokemon2.disabled = false
    skill4Pokemon2.disabled = false

    skill1Pokemon1.disabled = true
    skill2Pokemon1.disabled = true
    skill3Pokemon1.disabled = true
    skill4Pokemon1.disabled = true
    
    console.log(posicaoAtaque)
    console.log(pokemon1.habilidades[posicaoAtaque])
    vidaPokemon2 = vidaPokemon2 - (pokemon1.habilidades[posicaoAtaque].dano - pokemon2.estatistica.defesa);
    lifePokemon2.style.width = "" + (vidaPokemon2 - (pokemon1.habilidades[posicaoAtaque].dano - pokemon2.estatistica.defesa)) + "%"
    console.log(vidaPokemon2)
    barraDeVidaNumeroPokemon2.textContent = "" + vidaPokemon2;
   
    if (vidaPokemon2 <= 60) {
        lifePokemon2.classList.add("yellow")
    }
    if (vidaPokemon2 <= 30) {
        lifePokemon2.classList.add("red")
    } 
    if (vidaPokemon2 <= 0) {
        lifePokemon2.classList.add("morreu")
        alert(nomePokemon1.textContent + " ganhou")
      }
}
/*======== ATAQUE DO POKEMON DO LADO DIREITO > ==== */
function ataquePokemon2(posicaoAtaque){
    skill1Pokemon1.disabled = false
    skill2Pokemon1.disabled = false
    skill3Pokemon1.disabled = false
    skill4Pokemon1.disabled = false

    skill1Pokemon2.disabled = true
    skill2Pokemon2.disabled = true
    skill3Pokemon2.disabled = true
    skill4Pokemon2.disabled = true
    console.log(vidaPokemon1)
    vidaPokemon1 = vidaPokemon1 - (pokemon2.habilidades[posicaoAtaque].dano - pokemon1.estatistica.defesa);
    lifePokemon1.style.width = "" + (vidaPokemon1 - (pokemon1.habilidades[posicaoAtaque].dano - pokemon1.estatistica.defesa)) + "%"
    barraDeVidaNumeroPokemon1.textContent = "" + vidaPokemon1;

    if(vidaPokemon1 <= 60){
        lifePokemon1.classList.add("yellow")
    }
    if (vidaPokemon1 <= 30) {
        lifePokemon1.classList.add("red")
    } 
    if (vidaPokemon1 <= 0) {
        lifePokemon1.classList.add("morreu")
        alert(nomePokemon2.textContent + " ganhou")
      }
}