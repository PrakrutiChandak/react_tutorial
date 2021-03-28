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

  render(){
    return ( <
      div className = "App" >
        <h1> My first react app</h1>
        <p> Welcome :D</p>
        <Hero heroes={this.state.heroes } />
        <p>------------------------</p>
        <AddHero />
      </div>
  );
  }
   
}

export default App;