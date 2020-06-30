import React from 'react';

import { addAction, reduceAction } from './actions/counter';
import { postAction } from './actions/post';
import store from './store';

store.dispatch(addAction);
store.dispatch(reduceAction);
store.dispatch(postAction);
console.log('dddd', store.getState())
export default function App() {
  return (
    <div className="App">
      test2, redux的基础用法，针对test1做下优化
    </div>
  );
}
