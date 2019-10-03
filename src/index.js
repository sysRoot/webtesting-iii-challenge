import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './reducers';
import './index.css';

const store = createStore(reducer);
import Dashboard from './dashboard/Dashboard';

ReactDOM.render(<Provider store={store}><Dashboard /></Provider>, document.getElementById('root'));
