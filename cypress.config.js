const { defineConfig } = require('cypress');

module.exports = defineConfig({
    e2e: {
        viewportHeight: 1080,
        viewportWidth: 1920,
        defaultCommandTimeout: 8000,
        requestTimeout: 10000,
        baseUrl: 'https://the-internet.herokuapp.com/',

        // eslint-disable-next-line
        setupNodeEvents(on, config) {
        // implement node event listeners here
        },
    },
});
