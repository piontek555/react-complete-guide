import React, { PureComponent } from 'react';

import Person from './Person/Person';

class Persons extends PureComponent {
    constructor(props) {
        super(props);
        console.log('[Persons.js] Inside Constructor',  props);
      }
    
      componentWillMount() {
        console.log('[Persons.js] ComponentWillMount()')
      }
    
      componentDidMount() {
        console.log('[Persons.js] ComponentDidMount()')
      }

      componentWillReceiveProps(nextProps) {
        console.log('[UPDATE Persons.js] componentWillReceiveProps', nextProps);
      }

    //   shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[UPDATE Persons.js] shouldComponentUpdate', nextProps, nextState);
    //     return nextProps.persons !== this.props.perops ||
    //         nextProps.changed !== this.props.changed ||
    //         nextProps.clicked !== this.props.click;
    //     // return true;
    //   }

      componentWillUpdate(nextProps, nextState) {
        console.log('[UPDATE Persons.js] Inside componentWillUpdate', nextProps, nextState);
        return true;
      }

      componentDidUpdate () {
        console.log('[UPDATE Persons.js] Inside componentDidUpdate');
      }

    render () {
        console.log('[Persons.js] Inside render()');
        return this.props.persons.map((person, index) => {
            return <Person 
                click={()=> this.props.clicked( index )}
                name={person.name}
                position={index}
                age={person.age}
                key={person.id}
                changed={(event) => this.props.changed( event, person.id )} />
            } );
    }
}

export default Persons;