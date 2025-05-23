
// Import commands.js using ES2015 syntax:
import './commands';
import 'cypress-file-upload'



beforeEach (()=>{
    Cypress.on('uncaught:exception', ()=>{
        return false;
    });
    cy.visit('/');

});
            