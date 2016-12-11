import {createStore, applyMiddleware, combineReducers} from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import lyricsReducer from './reducers/lyrics-reducer';
import playerReducer from './reducers/player-reducer';

const reducers = combineReducers({
  lyrics: lyricsReducer,
  player: playerReducer
});

// applyMiddleware accepts any number of middleware as arguments
// invoking createLogger will give us an instance of redux-logger middleware
// thunkMiddleware gives us the ability to dispatch a new function instead of an action object
const reduxMiddleware = applyMiddleware(createLogger(), thunkMiddleware);

export default createStore(reducers, reduxMiddleware);