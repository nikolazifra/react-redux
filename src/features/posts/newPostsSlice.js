import { createSlice } from '@reduxjs/toolkit'

/*const initialState = [
  { id: '1', title: 'First Post', content: 'Hello Earthlings' },
  { id: '2', title: 'Second Post', content: 'My name is Redux' },
  { id: '3', title: 'Third post', content: 'I am a friendly alien' }

]*/
const initialState = [
  { id: '1', title: 'First Post', content: 'Hello Earthlings' },
  { id: '2', title: 'Second Post', content: 'My name is Redux' },
  { id: '3', title: 'Third post', content: 'I am a friendly alien' }

]


const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded(state, action) {
      state.unshift(action.payload)
    }
  }
})

export const { postAdded } = postsSlice.actions

export default postsSlice.reducer
