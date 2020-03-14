import React, { Component } from 'react';
import './App.css';

import PokemonList from './components/pokemon-list/pokemon-list.component';

class App extends Component {
  constructor() {
    super()

    this.state = {
      type: 1,
      pokemonList: []
    }
  }

  onSelectTypeChange = (event) => {
    this.setState({
      type: event.target.value,
      pokemonList: [] 
    })
  }

  onButtonClick = (event) => {
    event.preventDefault();

    let type = this.state.type;

    fetch(`https://pokeapi.co/api/v2/type/${type}/`)
      .then(result => {
      return result.json()
      })
      .then(data => {
        this.setState({
          pokemonList: data.pokemon
        })
      })
      .catch(error => console.log(error))
  
  }

  render() {
      return(
          <div className='app-container'>
            <div>
              <h1>Nobert's Pokemon App</h1>
                  <form>
                  <label>Choose your required type</label>
                  <br />
                    <div className='search-container'>
                      <select onChange={this.onSelectTypeChange}>
                        <option value='1'>normal</option>
                        <option value='2'>fighting</option>
                        <option value='3'>flying</option>
                        <option value='4'>poison</option>
                      </select>
                      <button 
                        className='btn'
                        onClick={this.onButtonClick}
                      >
                        Search
                      </button>
                    </div>
                  </form>
                  <br />
                  <PokemonList className='pokemon-list' pokemonResult={this.state.pokemonList} />            
            </div>
          </div>
      )
  }
}

export default App;
