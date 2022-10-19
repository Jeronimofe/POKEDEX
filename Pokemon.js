















const INFO_POKEMONS = []

function renderizarPokes(pokemon){
    let sectionPokedex$$ = document.querySelector(".sectionPokedex")
    if(pokemon.length === 0){
        sectionPokedex$$.innerHTML = ''
        renderizarMensaje()
    } else {
        sectionPokedex$$.innerHTML = ''
    }
    for(const poke in pokemon){

        let flip_card$$= document.createElement("div")
        sectionPokedex$$.appendChild(flip_card$$)
        flip_card$$.classList.add('flip_card')

        let flip_card_inner$$=document.createElement("div")
        flip_card$$.appendChild(flip_card_inner$$)
        flip_card_inner$$.classList.add('flip_card_inner')

        let flip_card_inner_back$$ = document.createElement("div")
        flip_card_inner$$.appendChild(flip_card_inner_back$$)
        flip_card_inner_back$$.classList.add('flip_card_inner_back')

        let flip_card_inner_front$$ = document.createElement("div")
        flip_card_inner$$.appendChild(flip_card_inner_front$$)
        flip_card_inner_front$$.classList.add('flip_card_inner_front')

        let div_back$$ = document.createElement("div")
        flip_card_inner_back$$.appendChild(div_back$$)
        div_back$$.classList.add('pokeDiv_back')

        let baseExp$$ = document.createElement("p")
        baseExp$$.textContent = "Base EXP = " + pokemon[poke].base_experience + "ep"
        div_back$$.appendChild(baseExp$$)
        baseExp$$.classList.add('baseExp')

        let height$$ = document.createElement("p")
        height$$.textContent = "Height = " + pokemon[poke].height + "ft"
        div_back$$.appendChild(height$$)
        height$$.classList.add('height')

        let weight$$ = document.createElement("p")
        weight$$.textContent = "Weight = " + pokemon[poke].weight + "lb"
        div_back$$.appendChild(weight$$)
        weight$$.classList.add('weight')


        let imgshiny_back$$ = document.createElement('img')
        imgshiny_back$$.src = pokemon[poke].sprites.back_shiny;
        imgshiny_back$$.classList.add('imagenPokeShiny_back')
        div_back$$.appendChild(imgshiny_back$$);

        let img_back$$ = document.createElement('img')
        img_back$$.src = pokemon[poke].sprites.back_default;
        img_back$$.classList.add('img_back')
        div_back$$.appendChild(img_back$$)

        let id_back$$ = document.createElement("p")
        id_back$$.textContent = pokemon[poke].id
        id_back$$.classList.add('idPoke_back')
        div_back$$.appendChild(id_back$$)

        let div$$ = document.createElement("div")
        flip_card_inner_front$$.appendChild(div$$)
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
            const tipoPrincipal$$ = document.createElement('p')
            tipoPrincipal$$.textContent = pokemon[poke].types[tipo].type.name

            if(pokemon[poke].types[tipo].type.name === 'fire'){
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
            div_tipos$$.appendChild(tipoPrincipal$$)
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

const search$$ = document.querySelector("input")
function pokefinder(pokemon){
    
    const pokesearch = []

    for(const poke of pokemon){    
            if (poke.name.includes(search$$.value) || poke.id == search$$.value){
                pokesearch.push(poke);
            } else if(poke.name !== search$$.value && poke.id !== search$$.value){
                for (const tipo in poke.types){
                    if (poke.types[tipo].type.name === search$$.value){
                        pokesearch.push(poke);
                    }
                }
            } else {
                renderizarMensaje()
            }
        }
    renderizarPokes(pokesearch)
    }   
search$$.addEventListener("input",() => pokefinder(INFO_POKEMONS))

function renderizarMensaje(){
        let sectionPokedex$$ = document.querySelector(".sectionPokedex")
        let mjs$$ = document.createElement("p")
        mjs$$.textContent = "Error en la busqueda"
        sectionPokedex$$.appendChild(mjs$$)
        mjs$$.classList.add('mensajeError')
    }




window.onload = pokedexIniciada();

