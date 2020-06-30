import React from 'react';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { get } from 'axios';
import thunk from 'redux-thunk';

  //redux中的三个重要的部分： action, reducer, store(state)
  const countreducer = function(state = { count: 1 }, action) {
    switch(action.type) {
      case 'add':
        return {
          ...state, count: state.count + 1
        }
      case 'reduce':
        return {
          ...state, count: state.count - 1
        }
      default: return state
    }
  }

  const postreducer = function(state = { list: [{title: 'cdd'}] }, action) {
    if(action.type === 'load_post') {
      return {
        ...state, list: action.payload
      }
    } else {
      return state
    }
  }

  const rootreducer = combineReducers({
    counter: countreducer,
    post: postreducer
  })

  const store = createStore(
    rootreducer,
    //有异步请求的话记得加下面的这句
    compose(
      applyMiddleware(...[thunk]),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ),
  );  
  store.dispatch(
    {
      type: 'add', 
      payload: {}
    }
  )

  store.dispatch({
    type: 'reduce',
    payload: {}
  })

  const getPost = () => {
    return get('https://jsonplaceholder.typicode.com/posts')
  }

  store.dispatch( async function(dispatch) {
    const res = await getPost();
    dispatch({
      type: 'load_post',
      payload: res.data
    })
  }

  )
  console.log(store, 'cccccc', store.getState());

// 如果想要改变一个reducer的值，需要使用dispatch派发一个action
// action 需要两个参数： type , 
function App() {
  return (
    <div className="App">
      test1, redux的基础用法
    </div>
  );
}

export default App;
