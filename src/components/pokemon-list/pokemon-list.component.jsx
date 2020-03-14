import React, { Component } from 'react';

import PokemonCard from '../pokemon-card/pokemon-card.component';

import './pokemon-list.styles.scss';

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
               <div className='pokemon-list'>
                   {this.renderPokemons()}
               </div>
           )
       }

       return (
           <div className='pokemon-list'>
               ...
           </div>
       )
        
    }
}

export default PokemonList;