import { Route, Routes } from 'react-router-dom'
import PostsList from './features/posts/PostsList'

function App() {
  return (
    <Routes>
      <Route path='/' element={<PostsList />} />
    </Routes>
  )
}

export default App
