import { handleActions } from 'redux-actions'
import { OrderedMap } from 'immutable'

import ac from '../constants/advisors-constants'

import {fromServer} from '../models/advisor-model'

const initialState = OrderedMap()

export default handleActions({
  [ac.FETCH_ADVISORS]: (s, a) => a.payload.advisors.reduce((acc, a) => (
    acc.set(a.id, fromServer(a))
  ), OrderedMap()),
  [ac.DELETE_ADVISOR]: (s, a) => s.delete(a.payload.id)
}, initialState)
