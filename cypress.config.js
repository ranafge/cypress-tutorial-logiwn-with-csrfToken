const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    baseUrl : "http://quotes.toscrape.com",
    username: "ranafge",
    password: "pass1478"
  }
});