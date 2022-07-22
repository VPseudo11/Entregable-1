import React from 'react'
import './NextButton.css'

const NextButton = ({ handleChange, bgColor }) => {
  const shadow = {
    boxShadow: `4px 4px 5px rgba(${bgColor}, 0.4)`
  }
  return (
    <div className='ButtonContainer'>
      <div className='Button' onClick={handleChange} style={shadow}>
        <i className="fa-solid fa-circle-chevron-right"></i>
      </div>
    </div>
  )
}

export default NextButton