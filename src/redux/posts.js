import { createSlice } from '@reduxjs/toolkit'
import { Request } from '../constants/request'
import { RequestStatus } from '../constants/request-status'
import { apiCallBegan } from './apiActions'

// status = 'idle' | 'loading' | 'succeeded' | 'failed'
// error = string | null

const initialState = {
  list: [],
  status: RequestStatus.Idle,
  error: null,
}

const slice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postRequested: (state) => {
      state.status = RequestStatus.Loading
    },
    postsReceived: (state, action) => {
      state.status = RequestStatus.Succeeded
      const loadedPosts = action.payload
      state.list = state.list.concat(loadedPosts)
    },
    postCreated: (state, action) => {
      const newPost = { ...action.payload, id: state.list.length + 1 }
      state.status = RequestStatus.Succeeded
      state.list = state.list.concat(newPost)
    },
    postRequestFailed: (state, action) => {
      state.status = RequestStatus.Failed
      state.error = action.payload
    },
  },
})

const { postRequested, postsReceived, postCreated, postRequestFailed } =
  slice.actions
export default slice.reducer

// Slices
export const getPostsError = (state) => state.entities.posts.error
export const selectAllPosts = (state) => state.entities.posts.list
export const requestPostStatus = (state) => state.entities.posts.status
export const selectPostById = (state, postId) =>
  state.entities.posts.find((post) => post.id === postId)

// Dispatch action
// Action creators
const url = '/posts'
export const fetchPosts = () => (dispatch) =>
  dispatch(
    apiCallBegan({
      url,
      onStart: postRequested.type,
      onSuccess: postsReceived.type,
      onError: postRequestFailed.type,
    })
  )

export const createPost = (data) => (dispatch) =>
  dispatch(
    apiCallBegan({
      url,
      method: Request.POST,
      data,
      onStart: postRequested.type,
      onSuccess: postCreated.type,
      onError: postRequestFailed.type,
    })
  )

// Memoization - reselect library
