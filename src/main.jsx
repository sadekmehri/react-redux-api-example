import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import App from './App'
import './App.css'
import configureStore from './redux/store'

const store = configureStore()
const root = document.getElementById('root')

ReactDOM.createRoot(root).render(
  <>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/*' element={<App />} />
        </Routes>
      </Router>
    </Provider>
  </>
)
