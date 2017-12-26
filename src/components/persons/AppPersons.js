import React, { Component } from 'react';
import AppPerson from './../person/AppPerson';

class AppPersons extends Component {
  render() {
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
