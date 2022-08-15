import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RequestStatus } from '../../constants/request-status'
import {
  createPost,
  fetchPosts,
  getPostsError,
  requestPostStatus,
  selectAllPosts,
} from '../../redux/posts'
import Post from './Post'

const PostsList = () => {
  const dispatch = useDispatch()
  const posts = useSelector(selectAllPosts)
  const error = useSelector(getPostsError)
  const postStatus = useSelector(requestPostStatus)

  // Call api
  useEffect(() => {
    if (postStatus === RequestStatus.Idle) dispatch(fetchPosts())
  }, [postStatus, dispatch])

  // Display posts
  const displayPosts = () => {
    if (posts.length === 0) return <h1>There is no post to display !</h1>

    return posts.map((post, key) => <Post key={key} post={post} />)
  }

  // Create new post. Dispatch a create action
  const handleCreateNewPost = () => {
    const post = {
      userId: 1,
      title: 'Sdig was here!',
      body: 'Testing something weird',
    }

    dispatch(createPost(post))
  }

  // Render Post list component
  const renderUI = () => {
    let content = ''
    switch (postStatus) {
      case RequestStatus.Loading:
        content = 'Loading...'
        break
      case RequestStatus.Succeeded:
        content = displayPosts()
        break
      default:
        content = <div>{error} !</div>
        break
    }
    return content
  }

  return (
    <>
      <h1>PostsList Component</h1>
      <button onClick={handleCreateNewPost}>Add new Post!</button>
      <>{renderUI()}</>
    </>
  )
}

export default PostsList
