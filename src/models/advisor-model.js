import { Record } from 'immutable'


export const AdvisorRecord = Record({
  firstName: '',
  lastName: '',
  email: '',
  id: null
})

export const fromServer = x => AdvisorRecord({
  firstName: x.FirstName,
  lastName: x.LastName,
  email: x.Email,
  id: x.id
})
