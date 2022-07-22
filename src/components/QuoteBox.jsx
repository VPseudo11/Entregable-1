import React from 'react'
import NextButton from './NextButton'
import Quote from './Quote'
import './QuoteBox.css'

const QuoteBox = ({ handleChange, quoteReceived, bgColor }) => {
    const colortxt = {
        color: `rgb(${bgColor})`
    }
    console.log(`Color text QuoteBox is ${bgColor}`)
    return (
        <div className='Card glass' style={colortxt}>
            <Quote quoteReceived={quoteReceived} />
            <NextButton handleChange={handleChange} bgColor={bgColor} />
        </div>
    )
}

export default QuoteBox