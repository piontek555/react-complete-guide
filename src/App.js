import React, { Component } from 'react';
import './App.css';
import Radium, { StyleRoot } from 'radium';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { id: 'asd1', name:'Max', age: 28 },
      { id: 'asdas2', name:'Manu', age: 29 },
      { id: 'asdas4', name:'Stephanie', age: 26 }
    ],
    otherState: 'Some other state',
    showPersons: false
  }

  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.person.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = persons;
    

    this.setState({ persons: person })
  }

  deletePersonHander = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  tooglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const styles = {
      backgroundColor: 'green',
      font: 'inherit',
      color: 'white',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              click={()=> this.deletePersonHander(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person)} />
          })}
        </div>
      );

      styles.backgroundColor = 'red';
      styles[':hover'] = {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }

    const classes = [];

    if (this.state.persons.length <= 2) {
      classes.push('red');
    }

    if (this.state.persons.length <= 1 ) {
      classes.push('bold');
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1>Hi, I'm a React App</h1>
          <p className={classes.join(' ')}>This is realy wroking</p>
          <button
            style={styles}
            onClick={this.tooglePersonHandler}>Toggle Persons</button>
          {persons}
        </div>
      </StyleRoot>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Work now'))
  }
}

export default Radium(App);
