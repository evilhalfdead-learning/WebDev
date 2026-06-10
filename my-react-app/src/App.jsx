import { useState } from 'react'
import './App.css'

function App() {
  const [flip, setFlip] = useState(null)

  const handleFlip = () => {
    const result = Math.random() < 0.5 ? 'Heads' : 'Tails'
    setFlip(result)
  }

  return (
    <div>
      <button onClick={handleFlip}>Flip the Coin</button>
      <h1>Coin Flip Game</h1>
      {flip && <p>You got: {flip}</p>}
    </div>
  )
}

export default App