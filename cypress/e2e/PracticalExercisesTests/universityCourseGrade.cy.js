/// <reference types = "cypress" />

describe("University Course Grade ", ()=> {
    beforeEach(()=>{
        cy.visit("https://exercises.test-design.org/university-grade/");
    });
    //R1 A university course grade system evaluates grades based on the following ingredients:
    //blackboard exercises (BE) in the range from 0 to 50 points,
    //laboratory exercises (LE) in the range from 0 to 50 points,
    //written part (WP), also in the range of 0 - 50 points,

    it("Navigate to University Course Grade page",()=>{

        cy.url().should("include", "/university-grade/");
    });

    //R2 The sum of partial grades SUM = (BE + LE + WP) is calculated and the final grade follows the following rules:
    it("University Course Grade R2",()=>{
        cy.xpath("/html/body/div/div/header[2]/p[3]/input[1]").type("50");
        cy.xpath("/html/body/div/div/header[2]/p[3]/input[2]").type("50");
        cy.xpath("/html/body/div/div/header[2]/p[3]/input[3]").type("50");
        cy.xpath("/html/body/div/div/header[2]/p[3]/button[1]").click();
        
        cy.xpath("/html/body/div/div/header[2]/p[3]/span[2]").should("have.text","very good");
    });

    //R2-1 If any of BE, LE, WP is under 25 points - failed.
    it("University Course Grade R2-1",()=>{
        cy.xpath("/html/body/div/div/header[2]/p[3]/input[1]").type("50");
        cy.xpath("/html/body/div/div/header[2]/p[3]/input[2]").type("50");
        cy.xpath("/html/body/div/div/header[2]/p[3]/input[3]").type("20");
        cy.xpath("/html/body/div/div/header[2]/p[3]/button[1]").click();
        
        cy.xpath("/html/body/div/div/header[2]/p[3]/span[2]").should("have.text","failed");
    });

    //R2-2 SUM is less than 76 points – failed.
    it("University Course Grade R2-2",()=>{
        cy.xpath("/html/body/div/div/header[2]/p[3]/input[1]").type("25");
        cy.xpath("/html/body/div/div/header[2]/p[3]/input[2]").type("25");
        cy.xpath("/html/body/div/div/header[2]/p[3]/input[3]").type("25");
        cy.xpath("/html/body/div/div/header[2]/p[3]/button[1]").click();
        
        cy.xpath("/html/body/div/div/header[2]/p[3]/span[2]").should("have.text","failed");
    });

    //R2-3 SUM is 76 - 100 points - satisfactory.
    it("University Course Grade R2-3",()=>{
        cy.xpath("/html/body/div/div/header[2]/p[3]/input[1]").type("25");
        cy.xpath("/html/body/div/div/header[2]/p[3]/input[2]").type("25");
        cy.xpath("/html/body/div/div/header[2]/p[3]/input[3]").type("26");
        cy.xpath("/html/body/div/div/header[2]/p[3]/button[1]").click();
        
        cy.xpath("/html/body/div/div/header[2]/p[3]/span[2]").should("have.text","satisfactory");
    });

    //R2-4 SUM is 101 - 125 points – good.
    it("University Course Grade R2-4",()=>{
        cy.xpath("/html/body/div/div/header[2]/p[3]/input[1]").type("50");
        cy.xpath("/html/body/div/div/header[2]/p[3]/input[2]").type("30");
        cy.xpath("/html/body/div/div/header[2]/p[3]/input[3]").type("26");
        cy.xpath("/html/body/div/div/header[2]/p[3]/button[1]").click();
        
        cy.xpath("/html/body/div/div/header[2]/p[3]/span[2]").should("have.text","good");
    });

    //R2-5 SUM is greater than 125 points - very good.
    it("University Course Grade R2-5",()=>{
        cy.xpath("/html/body/div/div/header[2]/p[3]/input[1]").type("50");
        cy.xpath("/html/body/div/div/header[2]/p[3]/input[2]").type("50");
        cy.xpath("/html/body/div/div/header[2]/p[3]/input[3]").type("26");
        cy.xpath("/html/body/div/div/header[2]/p[3]/button[1]").click();
        
        cy.xpath("/html/body/div/div/header[2]/p[3]/span[2]").should("have.text","very good");
    });
});