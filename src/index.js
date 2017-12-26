import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App title="Relevant Persons" />, document.getElementById('root'));
registerServiceWorker();
