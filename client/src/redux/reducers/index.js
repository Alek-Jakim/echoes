import { combineReducers } from 'redux';
import posts from './postsReducer';
import auth from './auth';

export default combineReducers({ posts, auth });