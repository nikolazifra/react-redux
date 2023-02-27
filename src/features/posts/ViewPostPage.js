import React from 'react'
import { useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom'

function ViewPostPage() {
  const params = useParams();
  const postId = params.postId
  const post = useSelector(state => state.posts.find(post => post.id === postId))



  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    )
  }

  return (
    <section>
      <article className="post">
        <h2>{post.title}</h2>
        <p className="post-content">{post.content}</p>
        <Link to={`/posts/update/${post.id}`} className="button">
          Update Post
        </Link>
      </article>
    </section>
  )
}

export default ViewPostPage