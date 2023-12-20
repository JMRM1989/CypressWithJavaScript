/// <reference types = "cypress" />
describe("Paid Vacation Days Test", ()=> {

    beforeEach(() =>{
        cy.visit("https://exercises.test-design.org/grocery/");
    });
    //Text that should have on assertion has spaces since the elements on the webpage also have spaces.
    it("Navigate to Online Grocery page",()=>{
        

        cy.url().should("include", "/grocery/");
    });

    //In an online grocery, you have the following price reduction.

    //R1 If you buy for at least EUR 1000 within a calendar year then a 5% price reduction can be claimed for the subsequent purchases in that calendar year.
    //R2 When you claim a price reduction, the amount you currently spend is not involved in the calendar year (total) spending.
    it("Online Grocery R1-R2",()=>{
        cy.xpath("/html/body/div/div/header[2]/p[3]/input").type("1000");
        cy.xpath("/html/body/div/div/header[2]/p[3]/button[2]").click();
        
        cy.xpath("/html/body/div/div/header[2]/p[3]/span[3]").should("have.text","5 ");

        cy.xpath("/html/body/div/div/header[2]/p[3]/input").type("500");
        cy.xpath("/html/body/div/div/header[2]/p[3]/button[1]").click();

        cy.xpath("/html/body/div/div/header[2]/p[3]/span[4]").should("have.text","475 ");

        cy.xpath("/html/body/div/div/header[2]/p[3]/button[2]").click();

        cy.xpath("/html/body/div/div/header[2]/p[3]/span[2]").should("have.text","1000 ");
    });

    //R3 If you don’t ask for price reduction then the double amount of the current purchase is added to your total spending.
    //R4 If your total spending with corrections reaches EUR 2000, then an 8% reduction can be claimed and if you ask for this price reduction, the current amount is added to your calendar year spending. 
    it("Online Grocery R3-R4",()=>{
        cy.xpath("/html/body/div/div/header[2]/p[3]/input").type("1000");
        cy.xpath("/html/body/div/div/header[2]/p[3]/button[2]").click();
        
        cy.xpath("/html/body/div/div/header[2]/p[3]/span[3]").should("have.text","5 ");

        cy.xpath("/html/body/div/div/header[2]/p[3]/input").type("500");

        cy.xpath("/html/body/div/div/header[2]/p[3]/button[2]").click();

        cy.xpath("/html/body/div/div/header[2]/p[3]/span[2]").should("have.text","2000 ");

        cy.xpath("/html/body/div/div/header[2]/p[3]/span[3]").should("have.text","8 ");

    });

    //R5 If your total spending with corrections reaches EUR 3000, then in the subsequent calendar year your initial spending is 25% of your previous year total spending (instead of zero).
    it("Online Grocery R5",()=>{
        cy.xpath("/html/body/div/div/header[2]/p[3]/input").type("3000");
        cy.xpath("/html/body/div/div/header[2]/p[3]/button[2]").click();
        cy.xpath("/html/body/div/div/header[2]/p[3]/button[3]").click();

        cy.xpath("/html/body/div/div/header[2]/p[3]/span[2]").should("have.text","750 ");

    });

    //R6 The total spending with corrections is displayed when you enter the grocery and is not changing during your purchase.
    //R7 The price to be paid for your purchase is displayed. 
    it("Online Grocery R6-7",()=>{
        cy.xpath("/html/body/div/div/header[2]/p[3]/input").type("500");

        cy.xpath("/html/body/div/div/header[2]/p[3]/span[4]").should("have.text","500 ");
        cy.xpath("/html/body/div/div/header[2]/p[3]/span[2]").should("have.text","0 ");

    });
});