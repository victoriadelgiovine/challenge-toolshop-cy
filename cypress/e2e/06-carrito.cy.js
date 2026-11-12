import { sel } from '../support/selectors';

// Flujo 3.6 - Eliminar un producto del carrito (TC-021) y total por linea (TC-031)
describe('Flujo 3.6 - Carrito', () => {
  beforeEach(() => {
    cy.addFirstProductToCart();
    cy.goToCart();
  });

  // TC-021: FALLA por el BUG-04 (el boton de eliminar no quita el producto).
  it('elimina el producto y deja el carrito vacio (TC-021, falla por BUG-04)', () => {
    cy.get(sel.cart.productTitle).should('have.length.greaterThan', 0);

    cy.get(sel.cart.delete).first().click();

    cy.get(sel.cart.productTitle).should('not.exist');
  });

  // TC-031: FALLA por el BUG-09 (el total de la linea muestra $00.00).
  it('el total de la linea es precio x cantidad (TC-031, falla por BUG-09)', () => {
    const aNumero = (texto) => parseFloat(texto.replace(/[^0-9.]/g, ''));

    cy.get(sel.cart.price).first().invoke('text').then((precioTxt) => {
      cy.get(sel.cart.quantity).first().invoke('val').then((cantidad) => {
        cy.get(sel.cart.linePrice).first().invoke('text').then((totalTxt) => {
          expect(aNumero(totalTxt)).to.be.closeTo(aNumero(precioTxt) * Number(cantidad), 0.01);
        });
      });
    });
  });
});
