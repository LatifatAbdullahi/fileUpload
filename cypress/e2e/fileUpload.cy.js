
describe('File Upload', () => {
    beforeEach(()=>{

       
        cy.visit('/', {falseOnStatusCode: false});

        cy.get('a[href*="/upload-file-demo"]').click()

        
    })

    it('upload file using cypress method',  ()=>{
        cy.get('input[type="file"]').selectFile('fileName.pdf')

    });

    it('upload file using plugin method',  ()=>{
    cy.get('input[type="file"]').attachFile('fileName.pdf')
        
    });
   

});
            