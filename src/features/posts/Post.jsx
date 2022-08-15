import React from 'react'
import { Link } from 'react-router-dom'

const Post = ({ post }) => {
  const { id, title, body } = post

  return (
    <div className='post-container'>
      <p>Title: {title}</p>
      <p>Body: {body.substring(0, 100)} ...</p>
      <p>
        <Link to={`/${id}`}>Click details</Link>
      </p>
    </div>
  )
}

export default Post
