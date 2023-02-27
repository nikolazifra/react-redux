import { createSlice, nanoid } from '@reduxjs/toolkit'


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
    postAdded: {
      reducer(state, action) {
        state.unshift(action.payload)
      },
      prepare(title, content, authorId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            authorId
          }
        }
      }
  },
    postUpdated(state, action) {
      const {id, title, content, authorId}  = action.payload
      const post = state.find(post => post.id === id)
      if (post) {
        post.title = title
        post.content = content
        post.authorId = authorId
      }
    }

  }
})

export const { postAdded, postUpdated } = postsSlice.actions

export default postsSlice.reducer
