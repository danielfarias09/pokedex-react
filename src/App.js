import React, { Component } from 'react';
import './App.css';
import Pokemons from './components/pokemons';

class App extends Component {
  state = {
    pokemons: []
  }
  render() {
    return (
      <Pokemons pokemons = {this.state.pokemons} />
    );
  }

  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=151')//will make a GET request to the endpoint 
    .then(res => res.json()) //parses the output to JSON
    .then((data) => {
      this.setState({ pokemons: data.results })
      console.log(this.state.pokemons)
    })
    .catch(console.log);
  }
}

export default App;
