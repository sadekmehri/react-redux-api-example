import instance from '../../services/http'
import { apiCallBegan, apiCallFailed, apiCallSuccess } from '../apiActions'

const api =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== apiCallBegan.type) return next(action)

    const { url, method, data, onStart, onSuccess, onError } = action.payload

    if (onStart) dispatch({ type: onStart })
    next(action)

    try {
      const response = await instance.request({
        url,
        method,
        data,
      })

      dispatch(apiCallSuccess(response.data))

      if (onSuccess) dispatch({ type: onSuccess, payload: response.data })
    } catch (err) {
      const message = err.response ? err.response.data : err.message

      dispatch(apiCallFailed(message))

      if (onError) dispatch({ type: onError, payload: message })
    }
  }

export default api
