import { sel } from '../support/selectors';

// Flujo 3.5 - Busqueda de productos (TC-016, TC-017 y TC-018)
describe('Flujo 3.5 - Busqueda de productos', () => {
  beforeEach(function () {
    cy.fixture('search').as('busqueda');
  });

  it('lista productos que coinciden con el termino buscado (TC-016)', function () {
    cy.searchProduct(this.busqueda.existente);

    cy.get(sel.search.productName).should('have.length.greaterThan', 0);
    cy.get(sel.search.productName)
      .first()
      .invoke('text')
      .should('match', new RegExp(this.busqueda.existente, 'i'));
  });

  it('muestra mensaje de sin resultados con un termino inexistente (TC-017)', function () {
    cy.searchProduct(this.busqueda.inexistente);

    cy.contains(this.busqueda.mensajeSinResultados).should('be.visible');
  });
});