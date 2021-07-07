import React from 'react'
import Counter from '../Counter'

import { render, fireEvent } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"

test("header renders with correct text", () => {
  const { getByTestId } = render(<Counter />)
  const headerEl = getByTestId("header")

  expect(headerEl.textContent).toBe("My counter")
})

test("counter initally start with text of 0", () => {
  const { getByTestId } = render(<Counter />)
  const counterEl = getByTestId("counter")

  expect(counterEl.textContent).toBe("0")
})

test("input contains inital value of 1", () => {
  const { getByTestId } = render(<Counter />)
  const inputEl = getByTestId("input")

  expect(inputEl.value).toBe("1")
})

test("add button renders with +", () => {
  const { getByTestId } = render(<Counter />)
  const addBtn = getByTestId("add-btn")

  expect(addBtn.textContent).toBe("+")
})

test("subtract button renders with -", () => {
  const { getByTestId } = render(<Counter />)
  const subtractBtn = getByTestId("subtract-btn")

  expect(subtractBtn.textContent).toBe("-")
})

test("change value of input words correcctly", () => {
  const { getByTestId } = render(<Counter />)
  const inputEl = getByTestId("input")

  expect(inputEl.value).toBe("1")

  fireEvent.change(inputEl, {
    target: {
      value: "5"
    }
  })

  expect(inputEl.value).toBe("5")
})

test("click on plus btn adds 1 to counter", () => {
  const { getByTestId } = render(<Counter />)
  const addBtnEl = getByTestId("add-btn")
  const counterEl = getByTestId("counter")

  fireEvent.click(addBtnEl)

  expect(counterEl.textContent).toBe("1")
})

test("click on plus btn subtracts 1 to counter", () => {
  const { getByTestId } = render(<Counter />)
  const subtractBtnEl = getByTestId("subtract-btn")
  const counterEl = getByTestId("counter")

  fireEvent.click(subtractBtnEl)

  expect(counterEl.textContent).toBe("-1")
})

test("changing input value then clicking on add btn works correctly", () => {
  const { getByTestId } = render(<Counter />)
  const addBtnEl = getByTestId("add-btn")
  const counterEl = getByTestId("counter")
  const inputEl = getByTestId("input")

  fireEvent.change(inputEl, {
    target: {
      value: "5"
    }
  })
  fireEvent.click(addBtnEl)

  expect(counterEl.textContent).toBe("5")
})

test("changing input value then clicking on subtract btn works correctly", () => {
  const { getByTestId } = render(<Counter />)
  const subtractBtnEl = getByTestId("subtract-btn")
  const counterEl = getByTestId("counter")
  const inputEl = getByTestId("input")

  fireEvent.change(inputEl, {
    target: {
      value: "5"
    }
  })
  fireEvent.click(subtractBtnEl)

  expect(counterEl.textContent).toBe("-5")
})