import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { DefaultRootState } from 'react-redux'
import { store } from '../../app/store'
import {useAppSelector} from './../../app/hooks'
import newPostsSlice from './newPostsSlice'
import { Link } from 'react-router-dom'

const PostsList = () => {
  const posts  = useAppSelector(state => state.posts)

  const renderedPosts = posts.map(post => (
    <article className="post-excerpt" key={post.id}>
      <h3>{post.title}</h3>
      <p className="post-content">{post.content.substring(0, 100)}</p>
      <Link to={`/posts/${post.id}`} className="button muted-button">
        View Post
      </Link>
      <Link to={`/posts/update/${post.id}`} className="button muted-button">
        Update Post
      </Link>
    </article>
  ))

  return (
     (posts.length > 0) ? (
       <section className="posts-list">
          <h2>Posts</h2>
          {renderedPosts}
        </section>
    ) : (
        <section className="posts-list">
          <h2>Posts</h2>
          <article>No posts at the moment...</article>
        </section>
    ))}

export default PostsList