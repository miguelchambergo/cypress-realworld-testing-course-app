export{}

describe('User journey', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  context("User journey", () => {
    it("a user can find a course on the home page and complete the courses lessons", () => {
        const URL1A = "/testing-your-first-application"
        const URL1B = URL1A + "/app-install-and-overview"
        const URL1C = URL1A + "/installing-cypress-and-writing-our-first-test"
        const URL1D = URL1A + "/setting-up-data-before-each-test"
        const URL_HOME = "/"

        cy.getByData("course-0").find("a").eq(3).click()
        cy.location("pathname").should("eq",URL1A)
        cy.getByData("next-lesson-button").click()
        cy.location("pathname").should("eq",URL1B)
        cy.getByData("challenge-answer-0").click()
        cy.getByData("next-lesson-button").should("exist").click()
        cy.location("pathname").should("eq",URL1C)
        cy.getByData("challenge-answer-0").click()
        cy.getByData("next-lesson-button").should("exist").click()
        cy.location("pathname").should("eq",URL1D)
        cy.getByData("challenge-answer-0").click()
        cy.getByData("next-lesson-button").should("exist").click()
        cy.location("pathname").should("eq",URL_HOME)
      
    }) 
  })

})