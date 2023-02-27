import React, { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useAppSelector} from '../../app/hooks';
import useAppDispatch from '../../app/hooks';
import { postUpdated } from './newPostsSlice';

function UpdatePostPage() {
  const params = useParams();
  const postId = params.postId
  const post = useAppSelector(state => state.posts.find(post => post.id === postId))
  const authors = useAppSelector(state => state.users)

  const [title, setTitle] = useState(post.title)
  const [content, setContent] = useState(post.content)
  const [authorId, setAuthorId] = useState(post.authorId)


  const onTitleChanged = e => setTitle(e.target.value)
  const onContentChanged = e => setContent(e.target.value)
  const onAuthorChanged = e => setAuthorId(e.target.value)

  const dispatch = useAppDispatch()
  const history = useHistory()

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postUpdated({id: postId, title, content, authorId}))
      history.push(`/posts/${postId}`)
      alert('Done with update')
    }
  }


  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    )
  }

  const canSave = Boolean(title) && Boolean(content) && Boolean(authorId)
  const authorsOptions = authors.map(user => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ))


  return (
    <section>
      <h2>Edit Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          placeholder="What's on your mind?"
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
        <button type="button" onClick={onSavePostClicked} disabled={!canSave}>
          Save Post
        </button>
      </form>
    </section>
  )
}

export default UpdatePostPage
