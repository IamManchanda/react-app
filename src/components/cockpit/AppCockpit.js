import React from 'react';

const AppCockpit = (props) => {
  const toggleStateCSS = [];
  if (props.showPersons) {
    toggleStateCSS.push('', 'primary');
  } else {
    toggleStateCSS.push('', 'secondary');
  }

  return (
    <div className="app-Cockpit grid-x grid-margin-x">
      <div className="cell">
        <h4 className="app-Cockpit_Title">{props.appTitle}</h4>
        <button 
          className={'button app-Cockpit_Button' + toggleStateCSS.join(' ')}
          onClick={props.clicked}>
          Toggle Persons
        </button>
      </div>
    </div>
  );
};

export default AppCockpit;
