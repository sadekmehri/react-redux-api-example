import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RequestStatus } from '../../constants/request-status'
import {
  createPost,
  requestPostStatus,
  fetchPosts,
  getPostsError,
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
  const displayPosts = () =>
    posts.map((post, key) => <Post key={key} post={post} />)

  // Create new post. Dispatch a create action
  const createNewPost = () => {
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
      case RequestStatus.Failed:
        content = <div>{error} !</div>
        break
    }
    return content
  }

  return (
    <>
      <h1>PostsList!</h1>
      <button onClick={createNewPost}>Add new Post</button>
      <>{renderUI()}</>
    </>
  )
}

export default PostsList
