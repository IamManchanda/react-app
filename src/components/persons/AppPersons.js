import React from 'react';
import AppPerson from './../person/AppPerson';

const AppPersons = (props) => props.persons.map((person, index) => {
  return (
    <AppPerson
      name={ person.name }
      age={ person.age }
      country={ person.country }
      click={ () => props.clicked(index) }
      change={ (event) => props.changed(event, person.id) }
      key={ person.id } >
      { person.designation }
    </AppPerson>
  );
});

export default AppPersons;
