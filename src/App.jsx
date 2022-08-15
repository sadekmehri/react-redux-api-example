import { Route, Routes } from 'react-router-dom'
import NotFound from './features/httpStatus/NotFound'
import PostInfo from './features/posts/PostInfo'
import PostsList from './features/posts/PostsList'

function App() {
  return (
    <Routes>
      <Route path='/' element={<PostsList />} />
      <Route path='/:id' element={<PostInfo />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App
