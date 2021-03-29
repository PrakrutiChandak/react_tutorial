import React, { Component } from 'react';
import Hero from './Hero';
import AddHero from './AddHero';

class App extends Component {

  state = { 
    heroes : [
      { name: 'Prakruti', age: 23, belt: 'black', id: 1},
      { name: 'Ryu', age: 20, belt: 'green', id: 2},
      { name: 'Crystal', age: 28, belt: 'pink', id: 3},
    ]
  }

  addHero = (hero) =>{
    hero.id = Math.random();
    let heroes = [...this.state.heroes, hero]
    this.setState({
      heroes: heroes
    })
    console.log(heroes);
  }

  deleteHero = (id) => {
    let heroes = this.state.heroes.filter(hero => {
      return (hero.id !== id)
    });
    this.setState({
      heroes: heroes
    })
  }

  render(){
    return ( <
      div className = "App" >
        <h1> My first react app</h1>
        <p> Welcome :D</p>
        <Hero deleteHero={this.deleteHero} heroes={this.state.heroes} />
        <p>------------------------</p>
        <AddHero addHero={this.addHero} />
      </div>
  );
  }
   
}

export default App;