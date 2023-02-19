export{}

describe("Newsletter Subscribe Form", () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it("allows users to subscribe to the email list",() => {
        const email = "miguel@maqaco.com"

        cy.getByData('email-input')
        .type(email)
        .getByData('submit-button')
        .click()
        .getByData('success-message').should("exist").contains(`Success: ${email} has been successfully subscribed`)
    })

    it("does not allow an inalid email address",() => {
        const bad_email = "miguel-maqaco.com"

        cy.getByData('email-input')
        .type(bad_email)
        .getByData('submit-button')
        .click()
        .getByData('success-message').should("not.exist")
    })

    it("does not allow a subscriber to subscribe again",() => {
        const subscribed_email = "john@example.com"

        cy.getByData('email-input')
        .type(subscribed_email)
        .getByData('submit-button')
        .click()
        .getByData('server-error-message').should("exist").contains(`Error: ${subscribed_email} already exists. Please use a different email address.`)
    })
})