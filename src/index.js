import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import ReduxThunk from 'redux-thunk'
import rootReducer from './reducers/index'

import App from './views/App.jsx'

const logger = createLogger()
const middleware = [ReduxThunk, logger]
const store = createStore(rootReducer, {}, applyMiddleware(...middleware))

ReactDOM.render(
  (
    <Provider store={store}>
      <App/>
    </Provider>
  ), document.getElementById('root'))
