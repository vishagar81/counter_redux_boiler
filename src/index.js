import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux'
import reducers from './reducers'
import Counter from './components/counter'
import { Provider } from 'react-redux'

const store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <Counter/>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
