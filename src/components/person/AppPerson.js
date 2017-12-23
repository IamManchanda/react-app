import React from 'react';
import { scoped } from './scoped.css';

const AppPerson = (props) => {
  return (
    <div className={'app-Person column card ' + scoped}>
      <h3 className="app-Person_Title" 
          onClick={ props.clicked }>
        { props.name }, { props.age }
      </h3>
      <p className="app-Person_Content">
        He is the { props.children } of { props.country }.
      </p>
      <input type="text" 
             onChange={ props.change } 
             value={ props.name } />
    </div>
  );
};

export default AppPerson;
