import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name:'Max', age: 28 },
      { name:'Manu', age: 29 },
      { name:'Stephanie', age: 26 }
    ],
    otherState: 'Some other state'
  }

  switchNameHandler = (newName) => {
    // console.log('was clicked');
    // DON'T DO THIS this.state.persons[0].name = 'Cezary'
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name:'Manu', age: 29 },
        { name:'Stephanie', age: 27 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 26 }
      ]
    })
  }

  render() {
    const styles = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is realy wroking</p>
        <button
          style={styles}
          onClick={() => this.switchNameHandler('Maxymilian!!')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age} 
          click={this.switchNameHandler.bind(this, 'Maxio!')} //Recomended
          changed={this.nameChangedHandler} >My Hobbies: Racing</Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Work now'))
  }
}

export default App;
