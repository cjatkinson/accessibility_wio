const chai = require("chai");
const bCommands = require("../utilities/browser-cutom-commands");
const eCommands = require("../utilities/element-custom-commands");

//to use debug option run `DEBUG=true followed by your .conf.js`
const defaultTimeoutInterval = process.env.DEBUG ? 60 * 60 * 500 : 90000;

exports.config = {
  // ====================
  // Runner Configuration
  // ====================
  runner: "local",

  // ==================
  // Specify Test Files
  // ==================
  specs: ["./test/specs/*.js"],
  // Patterns to exclude.
  exclude: [],

  // ============
  // Capabilities
  // ============
  maxInstances: 15,

  capabilities: [
    {
      maxInstances: 5,
      browserName: "chrome",
      "goog:chromeOptions": {}
    }
  ],

  // ===================
  // Test Configurations
  // ===================
  sync: true,
  logLevel: "silent", // Level of logging verbosity: silent | verbose | command | data | result | error
  deprecationWarnings: true,
  bail: 0,
  baseUrl: "https://magic.wizards.com/en",
  waitforTimeout: 10000, // Default timeout for all waitFor* commands.
  connectionRetryTimeout: 90000, // Default timeout in milliseconds for request if Selenium Grid doesn't send response
  connectionRetryCount: 3, // Default request retries count
  services: ["chromedriver"],
  hostname: "localhost",
  port: 9515,
  path: "/",

  framework: "mocha",
  mochaOpts: {
    ui: "bdd",
    timeout: 90000,
    compilers: ["js:@babel/register"]
  },
  reporters: ["spec"],

  // =====
  // Hooks
  // =====
  onPrepare: function(config, capabilities) {
    console.log("==== starting test suite ====");
  },
  beforeSession: function(config, capabilities, specs) {
    require("@babel/register");
  },
  before: function(capabilities, specs) {
    /**
     * Setup the Chai assertion framework
     */
    global.expect = chai.expect;
    global.assert = chai.assert;
    global.should = chai.should();
    /**
     * Add custom commands
     */
    Object.keys(bCommands).forEach(key => {
      browser.addCommand(key, bCommands[key]);
    });
    Object.keys(eCommands).forEach(key => {
      browser.addCommand(key, eCommands[key], true);
    });
  },
  afterTest: function(test) {
    //console.log(test);
  },

  onComplete: function(exitCode) {
    console.log("==== run complete ====");
  }
};
