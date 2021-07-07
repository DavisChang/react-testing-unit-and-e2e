/// <reference types="cypress" />

context('Render the counter page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  // https://on.cypress.io/interacting-with-elements

  it('renders correctly', () => {
    cy.findAllByText('My counter').should('exist')
  })
})
