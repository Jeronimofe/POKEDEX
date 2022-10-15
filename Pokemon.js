















const INFO_POKEMONS = []

function renderizarPokes(pokemon){
    for(poke in pokemon){
        let sectionPokedex$$ = document.querySelector(".sectionPokedex")

        let div$$ = document.createElement("div")
        sectionPokedex$$.appendChild(div$$)
        div$$.classList.add('pokeDiv')

        let img$$ = document.createElement('img')
        img$$.src = pokemon[poke].sprites.front_default;
        div$$.appendChild(img$$)

        let h3$$ = document.createElement("h3")
        h3$$.textContent = pokemon[poke].name 
        div$$.appendChild(h3$$)

        let id$$ = document.createElement("p")
        id$$.textContent = pokemon[poke].id
        div$$.appendChild(id$$)
        
    }
}

async function getPokemons(i){
            return fetch('https://pokeapi.co/api/v2/pokemon/'+i+'/?limit=151')
                    .then((response) => {return response.json()})
                    .then((poke) => {return poke})
                    .catch((error) => console.log('Error obteniendo todos los pokemons', error));
}

async function pokedexIniciada(){
    for(i=1; i<=151; i++){
            const InformacionIndividualPokemon = await getPokemons(i)
            INFO_POKEMONS.push(InformacionIndividualPokemon)
        }
    renderizarPokes(INFO_POKEMONS)
}
window.onload = pokedexIniciada();

