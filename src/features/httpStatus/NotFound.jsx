import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
      <h1 style={{ color: 'red', fontSize: 100 }}>Page Not Found !</h1>
      <p>
        <Link to='/'>Go Home</Link>
      </p>
    </>
  )
}

export default NotFound
