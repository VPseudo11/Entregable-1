import React from 'react'
import './Quote.css'

const Quote = ({quoteReceived}) => {
    return (
        <div className='Text'>
            <div className='Content'>
                <span><i className="fa-solid fa-quote-left"></i></span>
                <p>{quoteReceived.quote}</p>
            </div>
            <p className='Autor'>{quoteReceived.author}</p>
        </div>
    )
}

export default Quote