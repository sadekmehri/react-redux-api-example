import { configureStore } from '@reduxjs/toolkit'
import api from './middleware/api'
import reducer from './reducer'

export default () => {
  return configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), api],
  })
}
