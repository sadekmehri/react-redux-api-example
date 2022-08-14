import MockAdapter from 'axios-mock-adapter'
import { RequestStatus } from '../../../constants/request-status'
import http from '../../../services/http'
import { createPost } from '../../posts'
import configureStore from '../../store'
import { postStub } from './post.stub'

describe('Post Slice', () => {
  let fakeAxios
  let store
  const url = '/posts'

  beforeEach(() => {
    fakeAxios = new MockAdapter(http)
    store = configureStore()
  })

  const postSlice = () => store.getState().entities.posts

  describe('Add Post', () => {
   
    it('-> Should handle the add post action', async () => {
      const savedPost = { ...postStub, id: 1 }
      fakeAxios.onPost(url).reply(201, savedPost)

      await store.dispatch(createPost(postStub))

      expect(postSlice().posts).toContainEqual(savedPost)
    })
  })
})
