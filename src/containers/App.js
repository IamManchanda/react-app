import React, { Component } from 'react';
import AppPersons from './../components/persons/AppPersons';
import AppCockpit from "./../components/cockpit/AppCockpit";

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

    if (this.state.showPersons) {
      personsBlock = (
        <div className="grid-x grid-margin-x">
          <AppPersons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />
        </div>
      );
    }

    return (
      <div className="app">
        <AppCockpit
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler} />
        { personsBlock }  
      </div>
    );
  }
}

export default App;
