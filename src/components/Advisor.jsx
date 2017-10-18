import React from 'react'
import PropTypes from 'prop-types'

const button = onClick => (
  <button className='btn btn-outline-danger' onClick={onClick}>
    {'Delete'}
  </button>
)

const Advisor = ({ advisor, onDelete }) => (
  <div className='card' style={{marginBottom: 10}}>
    <div className='card-body'>
      <h5 className='card-title'>{`${advisor.firstName} ${advisor.lastName}`}</h5>
      <p className='card-text'>{advisor.email}</p>
      {button(onDelete(advisor.id))}
    </div>
  </div>
)

Advisor.propTypes = {
  onDelete: PropTypes.func.isRequired,
  advisor: PropTypes.object.isRequired,
}

export default Advisor
