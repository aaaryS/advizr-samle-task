import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router-dom'

import { Advisors } from './../containers'

export default class App extends Component {
  render() {
    return (
     <div>
       <Advisors/>
     </div>
    )
  }
}
