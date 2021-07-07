import React, { useState } from 'react'
import "./Counter.css"
function Counter() {
  const [counterValue, setCounterValue] = useState(0)
  const [inputValue, setInputValue] = useState(1)
  return (
    <div>
      <h2 data-testid="header">My counter</h2>
      <h3 data-testid="counter">{counterValue}</h3>
      <button data-testid="subtract-btn">-</button>
      <input
        className="text-center"
        data-testid="input"
        value={inputValue}
        type="number"
        onChange={(e) => {
          setInputValue(e.target.value)
        }}
      />
      <button data-testid="add-btn">+</button>
    </div>
  )
}

export default Counter
