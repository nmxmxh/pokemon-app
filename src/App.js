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
    this.setState({type: event.target.value })
  }

  onButtonClick = (event) => {
    event.preventDefault();

    // const API_URI = 'https://pokeapi.co/api/v2/type/';
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
      console.log("Current State : ", this.state)

      return(
          <div className='container app-container'>
            <div>
              <h4>Our Small Pokemon App</h4>
                  <form>
                  <label>Choose your required type!</label>
                  <br />
                    <select onChange={this.onSelectTypeChange}>
                      <option value='1'>normal</option>
                      <option value='2'>fighting</option>
                      <option value='3'>flying</option>
                      <option value='4'>poison</option>
                    </select>
                    <button 
                      className='btn btn-success'
                      onClick={this.onButtonClick}
                    >
                      Search
                      </button>
                  </form>
                  <br />
                  <PokemonList pokemonResult={this.state.pokemonList} />            
            </div>
          </div>
      )
  }
}

export default App;
