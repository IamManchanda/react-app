import React, { Component } from 'react';
import scoped from './_scoped.scss';

class AppPerson extends Component {
  render() {
    return (
      <div className={'app-Person auto cell callout ' + scoped.main}>
        <h3 className={'app-Person_Title ' + scoped.title} >
          { this.props.name }, { this.props.age }
        </h3>
        <p className={'app-Person_Content ' + scoped.content}>
          He is the { this.props.children } of { this.props.country }.
        </p>
        <input 
          type="text" 
          onChange={ this.props.change } 
          value={ this.props.name } />
        <button 
          className="close-button" 
          aria-label="Dismiss alert" 
          type="button" 
          onClick={ this.props.click }>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    );
  }
} 

export default AppPerson;
