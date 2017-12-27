import React, { PureComponent } from 'react';
import AppPerson from './../person/AppPerson';

class AppPersons extends PureComponent {
  constructor(props) {
    super(props);
    console.log('[AppPersons.js] Inside constructor', props);
  }

  componentWillMount() {
    console.log('[AppPersons.js] Inside componentWillMount');
  }

  componentDidMount() {
    console.log('[AppPersons.js] Inside componentDidMount');
  }

  componentWillReceiveProps(nextProps) {
    console.log('[UPDATE AppPersons.js] Inside componentWillReceiveProps')
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[UPDATE AppPersons.js] Inside shouldComponentUpdate', nextProps, nextState);
  //   return nextProps.person !== this.props.persons 
  //       || nextProps.changed !== this.props.changed
  //       || nextProps.clicked !== this.props.clicked;
  //   // return true;
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE AppPersons.js] Inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('[UPDATE AppPersons.js] Inside componentDidUpdate', prevProps, prevState);
  }

  render() {
    console.log('[AppPersons.js] Inside render');

    return this.props.persons.map((person, index) => {
      return (
        <AppPerson
          name={ person.name }
          age={ person.age }
          country={ person.country }
          click={ () => this.props.clicked(index) }
          change={ (event) => this.props.changed(event, person.id) }
          key={ person.id } >
          { person.designation }
        </AppPerson>
      );
    });
  }
}


export default AppPersons;
