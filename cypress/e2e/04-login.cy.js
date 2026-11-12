import { sel } from '../support/selectors';

// Flujo 3.4 - Login con datos incorrectos (TC-002 y TC-003)
describe('Flujo 3.4 - Login con datos incorrectos', () => {
  beforeEach(function () {
    cy.fixture('users').as('users'); // 'function' y no flecha: se necesita 'this'
  });

  it('muestra error con contrasena incorrecta (TC-002)', function () {
    cy.login(this.users.invalido.email, this.users.invalido.password);

    cy.get(sel.login.error).should('be.visible').and('contain.text', 'Invalid email or password');
    cy.url().should('include', '/auth/login');
  });

  it('muestra error con un mail no registrado (TC-003)', function () {
    cy.login(this.users.noRegistrado.email, this.users.noRegistrado.password);

    cy.get(sel.login.error).should('be.visible').and('contain.text', 'Invalid email or password');
    cy.url().should('include', '/auth/login');
  });
});
