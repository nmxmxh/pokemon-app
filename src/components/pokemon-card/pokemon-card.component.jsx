import React, { Component } from 'react';

class PokemonCard extends Component {
    constructor() {
        super()

        this.state = {
            showValues: false,
            imageURL: '',
            height: 0,
            weight: 0
        }
    }

    onPokemonClick = () => {
        if(!this.state.showValues) {
            fetch(this.props.url)
            .then(results => {
            return results.json()
            })
            .then(data => this.setState({
                showValues : true,
                height : data.height,
                weight : data.weight,
                imageURL : data.sprites.front_default
            }, console.log(this.state)))
            .catch(error => console.log(error))
        }

        else {
            this.setState({
                showValues : false
            }, console.log(this.state))
        }
    }

    render() {
        if(!this.state.showValues) {
            return(
                <div
                    className="pokemon-card"
                    onClick={this.onPokemonClick}
                >
                    name : {this.props.name}
                    <br />
                    url : {this.props.url}
                </div>
            )
        }

        else {
            return(
                <div
                    className="pokemon-card pokemon-card-active"
                    onClick={this.onPokemonClick}
                >
                    <div>
                        name : { this.props.name }
                        <br />
                        url : {this.props.url}
                    </div>
                    <div>
                        <img src={ this.state.imageURL } alt="cute pokemon" />
                        <p>weight: { this.state.weight } </p>
                        <p>height : { this.state.height }</p>
                    </div>
                </div>
            )
        }
    }
};

export default PokemonCard;