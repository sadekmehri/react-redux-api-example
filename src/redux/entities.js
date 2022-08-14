import { combineReducers } from '@reduxjs/toolkit'
import postReducer from './posts'

export default combineReducers({
  posts: postReducer,
})
