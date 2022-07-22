import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import quotes from './json/quotes.json'
import QuoteBox from './components/QuoteBox'

function App() {

  const getRandomQuote = (quotesArry) => {
    const randomIndex = Math.floor(Math.random() * quotesArry.length)
    return quotesArry[randomIndex]
  }

  const getRandomRGB = () => {
    let rgb = []
    for (let i = 0; i < 3; i++) {
      rgb.push(Math.floor(Math.random() * 256))
    }
    return rgb
  }

  let [quote, setQuote] = useState(getRandomQuote(quotes))

  const randomRGB = getRandomRGB()

  const bgColor = {
    backgroundColor: `rgb(${randomRGB})`
  }

  const handleChange = () => {
    setQuote(quote = getRandomQuote(quotes))
  }

  return (
    <div className="App" style={bgColor}>
      <QuoteBox handleChange={handleChange} quoteReceived={quote} bgColor={randomRGB} />
    </div>
  )
}

export default App
