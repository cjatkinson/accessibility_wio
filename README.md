#  accessibility_wio

This is a sample WebdriverIO project demonstrating how to to run an Axe accessibility scan of a webpage and assert
against the findings of the scan.

It's based on the [WebdriverIO with Mocha BDD](https://github.com/amiya-pattnaik/webdriverIO-with-mochaBDD) project by Amiya Pattanaik.
 
## How to run

Install the project's node_modules:

```
npm i
```

Run the test suite:

```
grunt test
```

When the test is complete, it will create a JSON file in /reports with the results of  the Axe scan.

Note: This test expects a running Chromedriver process which can be easily installed using [BrewD](https://formulae.brew.sh/cask/chromedriver)
