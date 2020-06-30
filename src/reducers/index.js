import { combineReducers } from 'redux';
import { counterReducer } from '../reducers/counter';
import { postReducer } from '../reducers/post';
const rootReducer = combineReducers({ age: counterReducer, post: postReducer});
export default rootReducer