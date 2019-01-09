import React, { Component } from 'react';
import PropTypes from 'prop-types'

import classes from './Person.css';
// import WithClass from '../../../hoc/WithClass';
import withClassAlt from '../../../hoc/withClassAlt';
import Aux from '../../../hoc/Auxiliary';
import { AuthContext } from '../../../containers/App';

class Person extends Component {
    constructor(props) {
        super(props);
        console.log('[Person.js] Inside Constructor',  props);
        this.inputElement = React.createRef();
    }

    componentWillMount() {
        console.log('[Person.js] ComponentWillMount()')
    }

    componentDidMount() {
        console.log('[Person.js] ComponentDidMount()');
        if (this.props.position === 0) {
            this.inputElement.current.focus();
        }
    }
    
    focus() {
        this.inputElement.current.focus();
    }

    render () {
        console.log('[Person.js] Inside render()');
        return (
            <Aux>
                <AuthContext.Consumer>
                    {auth => auth ? <p>I'm authenticated</p> : null}
                </AuthContext.Consumer>
                <p onClick={this.props.click}>I'm a {this.props.name} and I am {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input
                    ref={this.inputElement}
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name} />
            </Aux>
        )
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClassAlt(Person, classes.Person);