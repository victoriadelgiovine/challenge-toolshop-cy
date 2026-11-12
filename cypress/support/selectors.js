export const sel = {
  nav: {
    home: '[data-test="nav-home"]',
    contact: '[data-test="nav-contact"]',
    signIn: '[data-test="nav-sign-in"]',
    menu: '[data-test="nav-menu"]',
    cart: '[data-test="nav-cart"]',
  },
  login: {
    email: '[data-test="email"]',
    password: '[data-test="password"]',
    submit: '[data-test="login-submit"]',
    error: '[data-test="login-error"]',
  },
  register: {
    submit: '[data-test="register-submit"]',
    email: '[data-test="email"]',
    errors: '[data-test$="-error"], .alert-danger',
  },
  contact: {
    firstName: '[data-test="first-name"]',
    lastName: '[data-test="last-name"]',
    email: '[data-test="email"]',
    subject: '[data-test="subject"]',
    message: '[data-test="message"]',
    submit: '[data-test="contact-submit"]',
  },
  search: {
    input: '[data-test="search-query"]',
    submit: '[data-test="search-submit"]',
    productName: '[data-test="product-name"]',
  },
  product: {
    card: 'a.card',
    addToCart: '[data-test="add-to-cart"]',
  },
  cart: {
    productTitle: '[data-test="product-title"]',
    quantity: '[data-test="product-quantity"]',
    price: '[data-test="product-price"]',
    linePrice: '[data-test="line-price"]',
    delete: '.btn-danger',
    proceed1: '[data-test="proceed-1"]',
    proceed2: '[data-test="proceed-2"]',
    proceed3: '[data-test="proceed-3"]',
  },
  checkout: {
    
    street: '[data-test="address"]',
    city: '[data-test="city"]',
    address: '[data-test="address"]',
    state: '[data-test="state"]',
    country: '[data-test="country"]',
    postcode: '[data-test="postcode"]',
    paymentMethod: '[data-test="payment-method"]',
    finish: '[data-test="finish"]',
  },
};
