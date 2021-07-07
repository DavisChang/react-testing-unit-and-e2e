import React, { useState } from 'react'

function Counter() {
  const [counterValue, setCounterValue] = useState(0)
  const [inputValue, setInputValue] = useState(1)
  return (
    <div>
      <h2 data-testid="header">My counter</h2>
      <h3 data-testid="counter">{counterValue}</h3>
      <button data-testid="subtract-btn">-</button>
      <input data-testid="input" value={inputValue} type="number" />
      <button data-testid="add-btn">+</button>
    </div>
  )
}

export default Counter
