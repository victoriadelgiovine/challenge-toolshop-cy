import { sel } from '../support/selectors';

// Flujo 3.2 - Validaciones del registro (TC-007 y TC-008)
describe('Flujo 3.2 - Validaciones del registro', () => {
  beforeEach(function () {
    cy.fixture('register').as('registro');
    cy.visit('/#/auth/register');
  });

  it('no crea la cuenta y muestra errores con el formulario vacio (TC-007)', () => {
    cy.get(sel.register.submit).click();

    cy.get(sel.register.errors).should('have.length.greaterThan', 0);
    cy.url().should('include', '/auth/register');
  });

  it('muestra error de formato con un mail invalido (TC-008)', function () {
    cy.get(sel.register.email).type(this.registro.emailInvalido);
    cy.get(sel.register.submit).click();

    cy.contains(this.registro.mensajeErrorMail).should('be.visible');
    cy.url().should('include', '/auth/register');
  });
});