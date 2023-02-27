import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useAppSelector } from '../../app/hooks';

function ViewPostPage() {
  const params = useParams();
  const postId = params.postId
  const posts = useAppSelector(state => state.posts)
  const authors = useAppSelector(state => state.users)
  const post = posts.find(post => post.id === postId)
  if (!post) {
    return (
      <section>
        <article className="post">
          <div className="post-error">
            <span>Post not found!</span>
          </div>
        </article>
      </section>
    )
  }
  const author = authors.find((user) => user.id === post.authorId)
  return (
    <section>
      <article className="post">
        <h2>{post.title}</h2>
        <div>
          <span>by {author ? author.name : 'Unknown author'}</span>
        </div>
        <p className="post-content">{post.content}</p>
        <Link to={`/posts/update/${post.id}`} className="button">
          Update Post
        </Link>
      </article>
    </section>
  )
}

export default ViewPostPage
