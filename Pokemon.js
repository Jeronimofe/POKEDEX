















const INFO_POKEMONS = []

function renderizarPokes(pokemon){
    for(const poke in pokemon){
        let sectionPokedex$$ = document.querySelector(".sectionPokedex")

        let div$$ = document.createElement("div")
        sectionPokedex$$.appendChild(div$$)
        div$$.classList.add('pokeDiv')

        let img$$ = document.createElement('img')
        img$$.src = pokemon[poke].sprites.front_default;
        img$$.classList.add('imagenPoke')
        div$$.appendChild(img$$)

        let imgshiny$$ = document.createElement('img')
        imgshiny$$.src = pokemon[poke].sprites.front_shiny;
        imgshiny$$.classList.add('imagenPokeShiny')
        div$$.appendChild(imgshiny$$);

        let h3$$ = document.createElement("h3")
        h3$$.textContent = pokemon[poke].name
        h3$$.classList.add('nombrePoke')
        div$$.appendChild(h3$$)

        let id$$ = document.createElement("p")
        id$$.textContent = pokemon[poke].id
        id$$.classList.add('idPoke')
        div$$.appendChild(id$$)

        let div_tipos$$ = document.createElement('div')
        div$$.appendChild(div_tipos$$)
        div_tipos$$.classList.add('divTipos')
        for (const tipo in pokemon[poke].types){
            let tipoPrincipal$$ = document.createElement('p')
            tipoPrincipal$$.textContent = pokemon[poke].types[tipo].type.name
            div_tipos$$.appendChild(tipoPrincipal$$)
            if(pokemon[poke].types[0].type.name === 'fire'){
                tipoPrincipal$$.classList.add('firetype')
            } else if (pokemon[poke].types[tipo].type.name === 'water'){
                tipoPrincipal$$.classList.add('watertype')
            } else if(pokemon[poke].types[tipo].type.name === 'electric'){
                tipoPrincipal$$.classList.add('electrictype')
            } else if(pokemon[poke].types[tipo].type.name === 'grass'){
                tipoPrincipal$$.classList.add('grasstype')
            } else if(pokemon[poke].types[tipo].type.name === 'poison'){
                tipoPrincipal$$.classList.add('poisontype')
            } else if(pokemon[poke].types[tipo].type.name === 'flying'){
                tipoPrincipal$$.classList.add('flyingtype')
            } else if(pokemon[poke].types[tipo].type.name === 'dragon'){
                tipoPrincipal$$.classList.add('dragontype')
            } else if (pokemon[poke].types[tipo].type.name === 'fighting'){
                tipoPrincipal$$.classList.add('fightingtype')
            } else if (pokemon[poke].types[tipo].type.name === 'bug'){
                tipoPrincipal$$.classList.add('bugtype')
            } else if (pokemon[poke].types[tipo].type.name === 'ghost'){
                tipoPrincipal$$.classList.add('ghosttype')
            } else if (pokemon[poke].types[tipo].type.name === 'ground'){
                tipoPrincipal$$.classList.add('groundtype')
            } else if (pokemon[poke].types[tipo].type.name === 'ice'){
                tipoPrincipal$$.classList.add('icetype')
            } else if (pokemon[poke].types[tipo].type.name === 'normal'){
                tipoPrincipal$$.classList.add('normaltype')
            } else if(pokemon[poke].types[tipo].type.name === 'rock'){
                tipoPrincipal$$.classList.add('rocktype')
            } else if (pokemon[poke].types[tipo].type.name === 'psychic'){
                tipoPrincipal$$.classList.add('psychictype')
            } else if (pokemon[poke].types[tipo].type.name === 'steel'){
                tipoPrincipal$$.classList.add('steeltype')
            } else {
                tipoPrincipal$$.classList.add('fairytype')
            }
        }

        let div_stats$$ = document.createElement('div')
        div$$.appendChild(div_stats$$)
        div_stats$$.classList.add('divStats')

        let div_stats_value$$ = document.createElement('div')
        div_stats$$.appendChild(div_stats_value$$)
        div_stats_value$$.classList.add('divStats_Value')

        let div_stats_name$$ = document.createElement('div')
        div_stats$$.appendChild(div_stats_name$$)
        div_stats_name$$.classList.add('divStats_Name')

        for (const type in pokemon[poke].stats){
            let stat_name$$ = document.createElement('p')
            stat_name$$.textContent = pokemon[poke].stats[type].base_stat
            div_stats_name$$.appendChild(stat_name$$)
            stat_name$$.classList.add('statName')

            let stat_value$$ = document.createElement('p')
            stat_value$$.textContent = pokemon[poke].stats[type].stat.name
            div_stats_value$$.appendChild(stat_value$$)
            stat_value$$.classList.add('statValue')
        }

            let div_div$$ = document.createElement('div')
            div$$.appendChild(div_div$$)
            div_div$$.classList.add('divHabilidades')

            let div_div_titulo$$ = document.createElement('p')
            div_div$$.appendChild(div_div_titulo$$)
            div_div_titulo$$.textContent = 'Habilidades:'
            div_div_titulo$$.classList.add('tituloHabilidades')
        for (const power in pokemon[poke].abilities){
            let ability$$ = document.createElement("p")
            ability$$.textContent = pokemon[poke].abilities[power].ability.name
            ability$$.classList.add('habilidadPoke')
            div_div$$.appendChild(ability$$)
        }
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

