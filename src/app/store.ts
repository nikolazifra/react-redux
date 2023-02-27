import { configureStore } from '@reduxjs/toolkit'
import { type } from 'os';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import postsReducer from '../features/posts/newPostsSlice'
import usersReducer from '../features/users/newUsersSlice'

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer
  }
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

