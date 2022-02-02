module.exports = {
  launch: {
    dumpio: true,
    headless: true,
    product: "firefox",
  },
  browserContext: "default",
  server: {
    command: `npm start`,
    port: 3000,
    launchTimeout: 10000,
    debug: true,
  },
};