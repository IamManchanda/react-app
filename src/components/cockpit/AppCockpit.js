import React from 'react';
import scoped from './__scoped.scss';

const AppCockpit = (props) => {
  const toggleStateCSS = [];
  if (props.showPersons) {
    toggleStateCSS.push('', 'primary');
  } else {
    toggleStateCSS.push('', 'secondary');
  }

  return (
    <div className={'app-Cockpit grid-x grid-margin-x '  + scoped.main}>
      <div className="cell">
        <h4 className={'app-Cockpit_Title ' + scoped.title}>{props.appTitle}</h4>
        <button 
          className={'button app-Cockpit_Button '  + scoped.button + toggleStateCSS.join(' ')}
          onClick={props.clicked}>
          Toggle Persons
        </button>
      </div>
    </div>
  );
};

export default AppCockpit;
