/// <reference types = "cypress" />
describe("Paid Vacation Days Test", ()=> {
    beforeEach(()=>{
        cy.visit("https://exercises.test-design.org/paid-vacation-days/");
    });
    //R1 The number of vacation days depends on age and years of service. Every employee receives at least 22 days per year. 
    //Additional days are provided according to the following criteria:
    it("Navigate to Paid Vacation Days page",()=>{

        cy.url().should("include", "/paid-vacation-days/");
    });

    // R1-1 Employees younger than 18 or at least 60 years, or employees with at least 30 years of service will receive 5 extra days.
    it("Paid Vacation Days R1-1-A",()=>{
        cy.xpath("/html/body/div/div/header[2]/p[3]/input[1]").type("17");
        cy.xpath("/html/body/div/div/header[2]/p[3]/input[2]").type("1");
        cy.xpath("/html/body/div/div/header[2]/p[3]/button[1]").click();
        
        // we use have.text since the value we are comparing is the text within the span on the HTML page
        cy.xpath("/html/body/div/div/header[2]/p[3]/span[2]").should("have.text","27");
    });

    it("Paid Vacation Days R1-1-B",()=>{
        cy.xpath("/html/body/div/div/header[2]/p[3]/input[1]").type("60");
        cy.xpath("/html/body/div/div/header[2]/p[3]/input[2]").type("1");
        cy.xpath("/html/body/div/div/header[2]/p[3]/button[1]").click();
        
        cy.xpath("/html/body/div/div/header[2]/p[3]/span[2]").should("have.text","27");
    });

    it("Paid Vacation Days R1-1-B",()=>{
        cy.xpath("/html/body/div/div/header[2]/p[3]/input[1]").type("20");
        cy.xpath("/html/body/div/div/header[2]/p[3]/input[2]").type("30");
        cy.xpath("/html/body/div/div/header[2]/p[3]/button[1]").click();
        
        cy.xpath("/html/body/div/div/header[2]/p[3]/span[2]").should("have.text","27");
    });

    //R1-2 Employees of age 60 or more with at least 30 years of service , receive 3 extra days, on top of possible additional days already given based on R1-1.
    it("Paid Vacation Days R1-2",()=>{
        cy.xpath("/html/body/div/div/header[2]/p[3]/input[1]").type("60");
        cy.xpath("/html/body/div/div/header[2]/p[3]/input[2]").type("30");
        cy.xpath("/html/body/div/div/header[2]/p[3]/button[1]").click();
        
        cy.xpath("/html/body/div/div/header[2]/p[3]/span[2]").should("have.text","30");
    });

    //R1-3 If an employee has at least 15 years of service, 2 extra days are given. These two days are also provided for employees of age 45 or more. These extra days cannot be combined with the other extra days.
    it("Paid Vacation Days R1-3-A",()=>{
        cy.xpath("/html/body/div/div/header[2]/p[3]/input[1]").type("30");
        cy.xpath("/html/body/div/div/header[2]/p[3]/input[2]").type("15");
        cy.xpath("/html/body/div/div/header[2]/p[3]/button[1]").click();
        
        cy.xpath("/html/body/div/div/header[2]/p[3]/span[2]").should("have.text","24");
    });

    it("Paid Vacation Days R1-3-B",()=>{
        cy.xpath("/html/body/div/div/header[2]/p[3]/input[1]").type("45");
        cy.xpath("/html/body/div/div/header[2]/p[3]/input[2]").type("0");
        cy.xpath("/html/body/div/div/header[2]/p[3]/button[1]").click();
        
        cy.xpath("/html/body/div/div/header[2]/p[3]/span[2]").should("have.text","24");
    });

});