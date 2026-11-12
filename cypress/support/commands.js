import { sel } from './selectors';

// 1) Iniciar sesion desde la pagina de login
Cypress.Commands.add('login', (email, password) => {
  cy.visit('/#/auth/login');
  cy.get(sel.login.email).type(email);
  cy.get(sel.login.password).type(password, { log: false });
  cy.get(sel.login.submit).click();
});

// 2) Agregar el primer producto del catalogo al carrito
Cypress.Commands.add('addFirstProductToCart', () => {
  cy.visit('/');
  cy.get(sel.product.card).first().click();
  cy.get(sel.product.addToCart).click();
});

// 3) Buscar un producto por nombre
Cypress.Commands.add('searchProduct', (term) => {
  cy.visit('/');
  cy.get(sel.search.input).clear().type(term);
  cy.get(sel.search.submit).click();
});

// 4) Abrir el carrito desde la barra de navegacion
Cypress.Commands.add('goToCart', () => {
  cy.get(sel.nav.cart).click();
});

// 5) Completar el formulario de contacto 
Cypress.Commands.add('fillContactForm', (data, overrides = {}) => {
  const d = { ...data, ...overrides };
  cy.visit('/#/contact');
  cy.get(sel.contact.firstName).type(d.firstName);
  cy.get(sel.contact.lastName).type(d.lastName);
  cy.get(sel.contact.email).type(d.email);
  cy.get(sel.contact.subject).select(1);
  cy.get(sel.contact.message).type(d.message);
});
