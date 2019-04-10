import React, { Component } from 'react';
import PokemonDetails from './pokemonDetails';

class Pokemons extends Component {

  constructor(props){
    super(props);
    this.pokeDetails = React.createRef();
  }

  render(){
    return (
      <div className="container row">
        <div className="col-md-6">
          <ul className="list-group">
            <center><li className="list-group-item active">Pokedex</li></center>
            {this.props.pokemons.map((pokemon, index) => (
              <li key={pokemon.name} onClick={this.showDetails.bind(this,pokemon)} className="list-group-item"><center>{pokemon.name}</center></li> //Keys help React identify which items have changed, are added, or are removed.
            ))};        
          </ul>
        </div>
        <div className="col-md-6">
          <PokemonDetails ref = {this.pokeDetails} />
        </div>      
      </div>
  )
  }

  showDetails(pokemon){
    this.pokeDetails.current.updateDetails(pokemon.url);
  }

}


export default Pokemons;