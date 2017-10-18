import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { AdvisorsList } from './../components'

import * as advisorsActions from './../actions/advisors-actions'

@connect((s, p) => ({
  advisors: s.advisors
}),
d => ({
  advisorsActions: bindActionCreators(advisorsActions, d),
}))

export default class Advisors extends Component {
  static propTypes = {
    advisorsActions: PropTypes.object.isRequired
  }

  static defaultProps = {
    advisorsActions: {
      fetch: () => {},
      delete: () => {}
    }
  }

  componentDidMount() {
    this.props.advisorsActions.fetch()
  }

  onDelete = id => () => {
    this.props.advisorsActions.remove({id})
  }

  render() {
    const { advisors } = this.props
    return (
      <div className='container'>
        <h3 className='display-4 text-center'>{'Advisors'}</h3>
        <AdvisorsList advisors={advisors} onDelete={this.onDelete}/>
      </div>
    )
  }
}
