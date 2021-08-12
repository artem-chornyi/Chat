import { combineReducers } from 'redux';
import { reducer } from './chat/chatReducer';

export const rootReducer = combineReducers({
  messag: reducer,
});
