import { Link, useParams } from 'react-router-dom'

const PostInfo = () => {
  const { id } = useParams()

  return (
    <>
      <h1>Post Component {id}</h1>
      <Link to={'/'}>Back Home!</Link>
    </>
  )
}

export default PostInfo
