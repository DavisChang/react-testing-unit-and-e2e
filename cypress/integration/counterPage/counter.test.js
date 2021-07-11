/// <reference types="cypress" />

context('Render the counter page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  // it.only('just run for this test', () => {})

  it('header renders with correct text', () => {
    cy.findAllByText('My counter').should('exist')
  })

  it('counter initally start with text of 0', () => {
    cy.findByTestId('counter').should('contain', '0')
  })

  it('input contains inital value of 1', () => {
    cy.findByTestId('input').should('have.value', '1')
  })

  it('add button renders with +', () => {
    cy.findByTestId('add-btn').should('contain', '+')
  })

  it('subtract button renders with -', () => {
    cy.findByTestId('subtract-btn').should('contain', '-')
  })

  it('change value of input words correcctly', () => {
    cy.findByTestId('input').should('have.value', '1')
    cy.findByTestId('input').clear().type('5')
    cy.findByTestId('input').should('have.value', '5')
  })
  it('click on plus btn adds 1 to counter', () => {
    cy.findByTestId("add-btn").click()
    cy.findByTestId("counter").should('contain', '1')
  })
  it('click on plus btn subtracts 1 to counter', () => {
    cy.findByTestId("subtract-btn").click()
    cy.findByTestId("counter").should('contain', '-1')
  })
  it('changing input value then clicking on add btn works correctly', () => {
    cy.findByTestId('input').clear().type('5')
    cy.findByTestId("add-btn").click()
    cy.findByTestId("counter").should('contain', '5')
  })
  it('changing input value then clicking on subtract btn works correctly', () => {
    cy.findByTestId('input').clear().type('5')
    cy.findByTestId("subtract-btn").click()
    cy.findByTestId("counter").should('contain', '-5')
  })
  it('adding and then subtracting leads to the correct number', () => {
    cy.findByTestId('input').clear().type('10')
    cy.findByTestId("add-btn").click()
    cy.findByTestId("add-btn").click()
    cy.findByTestId("add-btn").click()
    cy.findByTestId("add-btn").click()
    cy.findByTestId("subtract-btn").click()
    cy.findByTestId("subtract-btn").click()
    cy.findByTestId("counter").should('contain', '20')

    cy.findByTestId('input').clear().type('5')
    cy.findByTestId("add-btn").click()
    cy.findByTestId("subtract-btn").click()
    cy.findByTestId("subtract-btn").click()
    cy.findByTestId("counter").should('contain', '15')

  })
  it('counter contains correct className', () => {
    cy.findByTestId("counter").should('have.class', '')
    cy.findByTestId('input').clear().type('50')
    cy.findByTestId("add-btn").click()
    cy.findByTestId("counter").should('have.class', '')
    cy.findByTestId("add-btn").click()
    cy.findByTestId("counter").should('have.class', 'green')

    cy.findByTestId("subtract-btn").click()
    cy.findByTestId("subtract-btn").click()
    cy.findByTestId("counter").should('have.class', '')

    cy.findByTestId("subtract-btn").click()
    cy.findByTestId("subtract-btn").click()
    cy.findByTestId("subtract-btn").click()
    cy.findByTestId("subtract-btn").click()
    cy.findByTestId("counter").should('have.class', 'red')
  })
})
