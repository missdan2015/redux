import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import * as serviceWorker from './serviceWorker';

// import Test1 from './Test1';
// import Test2 from './Test2';
import Test3 from './Test3';
import store from './store3';


ReactDOM.render(
  <React.StrictMode>
    {/* <Test1 /> */}
    {/* <Test2 /> */}
    <Provider store={store}>
      <Test3 />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
