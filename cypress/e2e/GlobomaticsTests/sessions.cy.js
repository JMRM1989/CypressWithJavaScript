/// <reference types = "cypress" />

describe("Sessions page",()=>{
    beforeEach(()=>{
        cy.visit("/conference");
        cy.get("h1").contains("View Sessions").click();
        cy.url().should("include","/sessions");
    });
    it("should navigate to conference sessions page and view day filter buttons",()=>{
        //validate that buttons to filder by day exists
        cy.get("[data-cy=AllSessions]");
        cy.get("[data-cy=Wednesday");
        cy.get("[data-cy=Thursday]");
        cy.get("[data-cy=Friday]");

    });

    it("should only display Wednesday sessions",()=>{
        cy.get("[data-cy=Wednesday").click();

        cy.get("[data-cy=day").contains("Wednesday").should("be.visible");
        cy.get("[data-cy=day").contains("Thursday").should("not.exist");
        cy.get("[data-cy=day").contains("Friday").should("not.exist");
    });

    it("should only display Thurday sessions",()=>{
        cy.get("[data-cy=Thursday").click();

        cy.get("[data-cy=day").contains("Wednesday").should("not.exist");
        cy.get("[data-cy=day").contains("Thursday").should("be.visible");
        cy.get("[data-cy=day").contains("Friday").should("not.exist");
    });

    it("should only display Friday sessions",()=>{
        cy.get("[data-cy=Friday").click();

        cy.get("[data-cy=day").contains("Wednesday").should("not.exist");
        cy.get("[data-cy=day").contains("Thursday").should("not.exist");
        cy.get("[data-cy=day").contains("Friday").should("be.visible");
    });

    it("should only display All sessions",()=>{
        cy.get("[data-cy=AllSessions]").click();

        cy.get("[data-cy=day").contains("Wednesday").should("be.visible");
        cy.get("[data-cy=day").contains("Thursday").should("be.visible");
        cy.get("[data-cy=day").contains("Friday").should("be.visible");
    });
});