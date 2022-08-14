import React from 'react'
const Post = ({ post }) => {
  const { id, title, body } = post
  
  return (
    <div className='post-container' key={id} value={id}>
      <p>Title: {title}</p>
      <p>Body: {body}</p>
    </div>
  )
}

export default Post
