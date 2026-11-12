import { sel } from '../support/selectors';

// Flujo 3.3 - Formulario de contacto (TC-012 y TC-014)
describe('Flujo 3.3 - Formulario de contacto', () => {
  beforeEach(function () {
    cy.fixture('contact').as('contact');
  });

  it('envia el formulario con datos validos y muestra confirmacion (TC-012)', function () {
    cy.fillContactForm(this.contact);
    cy.get(sel.contact.submit).click();

    cy.contains('Thanks for your message').should('be.visible');
  });

  // TC-014: este test FALLA por el BUG-11 (el sitio acepta un mail sin @ y confirma el envio).
  
    it('muestra error de formato con un mail invalido (TC-014, falla por BUG-11)', function () {
    cy.fillContactForm(this.contact, { email: this.contact.emailInvalido });
    cy.get(sel.contact.submit).click();

    cy.contains(this.contact.mensajeErrorMail).should('be.visible');
  });
});
