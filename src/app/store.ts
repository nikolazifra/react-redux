import { configureStore, combineReducers} from '@reduxjs/toolkit'
import { type } from 'os';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import postsReducer from '../features/posts/newPostsSlice'

export const store = configureStore({
  reducer: {
    posts: postsReducer
  }
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

