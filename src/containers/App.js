import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
// import WithClass from '../hoc/WithClass';
import withClassAlt from '../hoc/withClassAlt';
import Aux from '../hoc/Auxiliary';
// import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

export const AuthContext = React.createContext(false);

class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log('[App.js] Inside Constructor',  props);
    this.state = {
      persons: [
        { id: 'asd1', name:'Max', age: 28 },
        { id: 'asdas2', name:'Manu', age: 29 },
        { id: 'asdas4', name:'Stephanie', age: 26 }
      ],
      otherState: 'Some other state',
      showPersons: false,
      toggleClicked: 0,
      authenticated: false
    }
  }

  componentWillMount() {
    console.log('[App.js] ComponentWillMount()')
  }

  componentDidMount() {
    console.log('[App.js] ComponentDidMount()')
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[UPDATE App.js] shouldComponentUpdate', nextProps, nextState);
  //   return nextState.persons !== this.state.persons ||
  //     nextState.showPersons !== this.state.showPersons;
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log('[App.js] Inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate () {
    console.log('[App.js] Inside componentDidUpdate');
  }

  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    } );

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    
    this.setState({ persons: persons })
  }

  deletePersonHander = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  tooglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( (prevState, props) => {
      return {
        showPersons: !doesShow,
        toggleClicked: prevState.toggleClicked + 1
      }
    });
  }

  loginHandler = () => {
    this.setState({
      authenticated: true
    })
  }

  render() {
    console.log('[App.js] Inside render()');
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHander}
            changed={this.nameChangedHandler} />;
    }

    return (
        // <WithClass classes={classes.App}>
        <Aux>
          <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
          <Cockpit
            appTitle={this.props.title}
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            login={this.loginHandler}
            clicked={this.tooglePersonHandler} />
            <AuthContext.Provider value={this.state.authenticated}>
              {persons}
            </AuthContext.Provider>
        </Aux>
        // </WithClass>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Work now'))
  }
}

export default withClassAlt(App, classes.App);
