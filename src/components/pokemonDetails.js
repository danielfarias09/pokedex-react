import React, { Component } from 'react';

class PokemonDetails extends Component {
    
    url = 'https://pokeapi.co/api/v2/pokemon/1/'

    constructor(props){
        super(props);

        this.state = {
            selectedPokemon: {
                id: '',
                name: '',
                stringTypes: '',
                sprites: {}
            }
        }
    }

    render(){
        return (
            //sticky-top mantém o elemento no topo mesmp depois e fazer scroll
            <div className="card border-warning sticky-top" style={{width: 250 + 'px'}}> 
                <div class="card-header">
                    <center className="text-danger">#{this.state.selectedPokemon.id} {this.state.selectedPokemon.name}</center>
                 </div>
                <div className="card-body">
                        <div>
                            <center><img className="card-img" src={this.state.selectedPokemon.sprites.front_default} alt="pokemon" /></center>
                            <center><p className="card-text">{this.state.selectedPokemon.types}</p></center>
                        </div>                              
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.updateDetails(this.url);
    }

      updateDetails(url){
        fetch(url) //will make a GET request to the endpoint 
        .then(res => res.json()) //parses the output to JSON
        .then((data) => {
          data.types =  this.extractPokemonTypes(data.types);
          this.setState({ selectedPokemon: data })
        })
        .catch(console.log);
      }

      extractPokemonTypes(listTypes){
          return listTypes.map(element => element.type.name).join(', ');
      }
}

export default PokemonDetails;