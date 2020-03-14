import React, { Component } from 'react';

import PokemonCard from '../pokemon-card/pokemon-card.component'

class PokemonList extends Component {
    renderPokemons() {
        return this.props.pokemonResult.map(pokemon => {
            // return <li 
            //     className='pokemon-card' 
            //     key={pokemon.pokemon.name}
            //     >
            //         name: { pokemon.pokemon.name }
            //         <br />
            //         url: { pokemon.pokemon.url }
            //     </li>
            return <PokemonCard 
                        key={pokemon.pokemon.name} 
                        url={pokemon.pokemon.url} 
                        name={pokemon.pokemon.name} 
                    />
        })
    }

    render()  {
       if(this.props.pokemonResult.length > 0) {
           return(
               <div>
                   {this.renderPokemons()}
               </div>
           )
       }

       return (
           <div>
               ...
           </div>
       )
        
    }
}

export default PokemonList;