import React, { Component } from 'react';
import AppPerson from './person/AppPerson';
import { scoped } from './scoped.css';

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Narendra Modi', age: 67, country: 'India', designation: '16th Prime Minister' },
      { id: 2, name: 'Donald Trump', age: 71, country: 'United States', designation: '45th President' },
      { id: 3, name: 'Vladimir Putin', age: 65, country: 'Russia', designation: '2nd and 4th President' },
    ],
    showPersons: false,
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => p.id === id);
    const person = { ...this.state.persons[personIndex] }
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons}); 
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({persons});
  }

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons,
    });
  }

  render() {
    let personsBlock = null;
    const toggleStateCSS = [];

    if (this.state.showPersons) {
      personsBlock = (
        <div className="columns">
          { this.state.persons.map((person, index) => {
            return (
              <AppPerson name={ person.name }
                         age={ person.age }
                         country={ person.country }
                         clicked={ () => this.deletePersonHandler(index) }
                         change={ (event) => this.nameChangedHandler(event, person.id) }
                         key={ person.id } >
                { person.designation }
              </AppPerson>
            );
          }) }
        </div>
      );
      toggleStateCSS.push('', 'is-info');
    } else {
      toggleStateCSS.push('', 'is-primary');
    }

    return (
      <div className={'app ' + scoped}>
        <div className="container">
          <button className={'button' + toggleStateCSS.join(' ')}
                  onClick={ this.togglePersonsHandler }>
            Toggle Persons
          </button>
        </div>
        <div className="container">
          { personsBlock }
        </div>  
      </div>
    );
  }
}

export default App;
