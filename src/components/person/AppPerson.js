import React from 'react';
import scoped from './_scoped.scss';

const AppPerson = (props) => {
  return (
    <div className={'app-Person auto cell callout ' + scoped.main}>
      <h3 className={'app-Person_Title ' + scoped.title} >
        { props.name }, { props.age }
      </h3>
      <p className={'app-Person_Content ' + scoped.content}>
        He is the { props.children } of { props.country }.
      </p>
      <input 
        type="text" 
        onChange={ props.change } 
        value={ props.name } />
      <button 
        className="close-button" 
        aria-label="Dismiss alert" 
        type="button" 
        onClick={ props.clicked }>
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};

export default AppPerson;
