import React, { useState } from 'react'
import useAppDispatch, {useAppSelector} from '../../app/hooks'
import { postAdded } from './newPostsSlice'

const AddPostForm = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [authorId, setAuthorId] = useState('')

  const onTitleChanged = e => setTitle(e.target.value)
  const onContentChanged = e => setContent(e.target.value)
  const onAuthorChanged = e => setAuthorId(e.target.value)
  const dispatch = useAppDispatch()
  const authors = useAppSelector(state => state.users)


  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postAdded(title, content, authorId))
      setTitle('')
      setContent('')
      setAuthorId('')
    }
  }

  const canSave = Boolean(title) && Boolean(content) && Boolean(authorId)
  const authorsOptions = authors.map(user => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ))

  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postAuthor">Author:</label>
        <select id="postAuthor" value={authorId} onChange={onAuthorChanged}>
          <option value=""></option>
          {authorsOptions}
        </select>
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <button type="button" onClick={onSavePostClicked} disabled={!canSave}>Save Post</button>
      </form>
    </section>
  )
}

export default AddPostForm