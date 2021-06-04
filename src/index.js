//ability to use react
import React from 'react';
//react Document Object Model api
import ReactDOM from 'react-dom';
//use root style
import './index.css';
//import components
import App from './App';
//testing party in the backend
import registerServiceWorker from './registerServiceWorker';

//using the reactDOM render method to render the app page, pass in components from app, and just one page
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
