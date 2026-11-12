import { sel } from '../support/selectors';

// Flujo 3.1 - TC-023: compra completa (agregar al carrito, iniciar sesion y confirmar)

describe('Flujo 3.1 - Compra completa (TC-023)', () => {
  beforeEach(function () {
    cy.fixture('users').as('users');
    cy.fixture('checkout').as('checkout');
  });

  it('permite agregar al carrito, iniciar sesion y confirmar la compra', function () {
    // 1. La pagina principal muestra productos
    cy.visit('/');
    cy.get(sel.product.card).should('have.length.greaterThan', 0);

    // 2. Agregar un producto al carrito
    cy.addFirstProductToCart();

    // 3. El producto esta en el carrito
    cy.goToCart();
    cy.get(sel.cart.productTitle).should('have.length.greaterThan', 0);

    // 4. Proceed to checkout: el sitio pide iniciar sesion
    cy.get(sel.cart.proceed1).click();

    // 5. Iniciar sesion con el usuario de prueba
    cy.get(sel.login.email).type(this.users.valido.email);
    cy.get(sel.login.password).type(this.users.valido.password, { log: false });
    cy.get(sel.login.submit).click();

    // El producto sigue en el carrito despues del login
    cy.get(sel.cart.proceed2).click();

    // 6. Direccion y metodo de pago con datos de prueba

        // Esperar a que el formulario termine de cargar los datos precargados del usuario
    cy.get(sel.checkout.address).should('not.have.value', '');

    cy.get(sel.checkout.state).clear().type(this.checkout.state);
    cy.get(sel.checkout.state).should('have.value', this.checkout.state);
    cy.get(sel.cart.proceed3).should('be.enabled').click();

    cy.get(sel.checkout.paymentMethod).select(this.checkout.metodoPago);
    cy.get('[placeholder="Your Account name *"]').type(this.checkout.nombreCuenta);
    cy.get('[placeholder="Your Account number *"]').type(this.checkout.numeroCuenta);
    cy.get(sel.checkout.finish).click();

    // 7. Mensaje de confirmacion (ajustar el texto al que muestre el sitio)
    cy.contains(/payment was successful|thanks for your order/i).should('be.visible');
  });
});
