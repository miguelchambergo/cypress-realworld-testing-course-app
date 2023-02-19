export{}

describe('home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  context("Hero section", () => {
    it("the h1 contains the correct text", () => {
      cy.getByData("hero-heading")
      .should("exist")
      .contains("Testing Next.js Applications with Cypress")
      
    })
  
    it("the features on the homepage are correct", () => {
      const dt_elements = ["4 Courses","25+ Lessons","Free and Open Source"]
      var total = 0
  
      cy.get("dt")
      .should("exist")
      .each(($element,index) => {
        expect($element).to.contain(dt_elements[index])
        total++
      }).then(() => {
        expect(total).to.equal(dt_elements.length)
      })
  
    })
  })

  context("Courses section", () => {
    it("Course: Testing your first Next.js application", () => {
      cy.getByData("course-0").find("a").eq(3).click()
      cy.location("pathname").should("eq","/testing-your-first-application")
    })

    it("Course: Testing Foundations", () => {
      cy.getByData("course-1").find("a").eq(3).click()
      cy.location("pathname").should("eq","/testing-foundations")
    })

    it("Course: Cypress Fundamentals", () => {
      cy.getByData("course-2").find("a").eq(3).click()
      cy.location("pathname").should("eq","/cypress-fundamentals")
    })
  })

  

  

})