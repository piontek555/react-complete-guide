import React, { Component } from 'react';
import classes from './App.css';
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
      cursor: 'pointer'
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
    }

    const assignedClasses = [];

    if (this.state.persons.length <= 2) {
      assignedClasses.push('red');
    }

    if (this.state.persons.length <= 1 ) {
      assignedClasses.push('bold');
    }

    return (
        <div className={classes.App}>
          <h1>Hi, I'm a React App</h1>
          <p className={assignedClasses.join(' ')}>This is realy wroking</p>
          <button
            style={styles}
            onClick={this.tooglePersonHandler}>Toggle Persons</button>
          {persons}
        </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Work now'))
  }
}

export default App;
