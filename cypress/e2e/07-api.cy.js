// Flujo 3.7 - API con cy.request (TC-025, TC-026 y TC-027)
// Confirma las rutas y los nombres de campos en Swagger:
// https://api-with-bugs.practicesoftwaretesting.com/api/documentation
describe('Flujo 3.7 - API Toolshop', () => {
  const apiUrl = () => Cypress.expose('apiUrl');

  beforeEach(function () {
    cy.fixture('users').as('users');
  });

  it('GET /products devuelve 200 y una lista de productos (TC-025)', () => {
    cy.request(`${apiUrl()}/products`).then((res) => {
      expect(res.status).to.eq(200);
      const lista = res.body.data ?? res.body;
      expect(lista).to.be.an('array').and.not.be.empty;
      expect(lista[0]).to.have.property('name');
    });
  });

  it('POST /users/login con credenciales validas devuelve 200 y token (TC-026)', function () {
    cy.request('POST', `${apiUrl()}/users/login`, {
      email: this.users.valido.email,
      password: this.users.valido.password,
    }).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body).to.have.property('access_token');
    });
  });

  it('POST /users/login con contrasena invalida devuelve 401 y no devuelve token (TC-027)', function () {
    cy.request({
      method: 'POST',
      url: `${apiUrl()}/users/login`,
      body: {
        email: this.users.invalido.email,
        password: this.users.invalido.password,
      },
      failOnStatusCode: false,
    }).then((res) => {
      expect(res.status).to.eq(401);
      expect(res.body).to.not.have.property('access_token');
    });
  });
});
