import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Advisor from './Advisor'

const AdvisorsList = ({ onDelete, advisors }) => (
  <div className='row justify-content-md-center'>
    <div className='col-md-6'>
      {advisors.map((a, key) => (
        <Advisor advisor={a} onDelete={onDelete} key={key}/>
      )).toList()}
    </div>
  </div>
)

AdvisorsList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  advisors: PropTypes.object.isRequired,
}

export default AdvisorsList
