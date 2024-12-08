import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com/v1/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
