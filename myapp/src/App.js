import React, { Component } from 'react';
import NavBar from './NavBar';

class App extends Component {

  state = { 
    navbars : [
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
        <NavBar navbars={this.state.navbars } />
        <p>------------------------</p>
      
      </div>
  );
  }
   
}

export default App;