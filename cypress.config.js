const { defineConfig } = require('cypress');

module.exports = defineConfig({
  expose: {
    apiUrl: 'https://api-with-bugs.practicesoftwaretesting.com',
  },
  e2e: {
    baseUrl: 'https://with-bugs.practicesoftwaretesting.com/',
    viewportWidth: 1280,
    viewportHeight: 800,
    defaultCommandTimeout: 15000,
    video: false,
  },
});