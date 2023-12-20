/// <reference types = "cypress" />

describe("Submit a Session", ()=> {
    beforeEach(()=>{
        cy.visit("/conference");
        cy.get("h1").contains("View Sessions").click();
        cy.url().should("include", "/sessions");
        cy.get("a").contains("Submit a Session!").click();
    })

    it("should navigate to conference sessions page",()=>{
        cy.url().should("include", "/sessions/new");
    });

    it("should submit a conference sessions successfully",()=> {

        //Fill the Form
        cy.contains("Title").type("Cypress Testing Session");
        cy.contains("Description").type("Learning Cypress");
        cy.contains("Day").type("Thursday");
        cy.contains("Level").type("Advance");

        //Submit the Form
        cy.get("form").submit();

        //Validate the Submition
        cy.contains("Session Submitted Successfully");
    });

});