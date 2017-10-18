import { createAction } from 'redux-actions'
import axios from 'axios'

import ac from '../constants/advisors-constants'

export const fetch = () => async (d) => {
  const result = await axios.get('https://advizr-fe-coding-challenge.herokuapp.com/viewData')
  d(createAction(ac.FETCH_ADVISORS)({advisors: result.data.Advisors}))
}

export const remove = (p = {}) => async (d) => {
  // await axios.delete(`https://advizr-fe-coding-challenge.herokuapp.com/viewData/Advisors/${p.id}`)
  d(createAction(ac.DELETE_ADVISOR)({id: p.id}))
}
