const fs = require("fs");
import homePage from "../pageobjects/home-page.page";

// object to hold Axe violations
let axeVioltations = {};

// function to return violations
const findViolationCountById = id => {
  return axeVioltations.violations.find(obj => obj.id === id).nodes[0].any
    .length;
};

before(function() {
  homePage.open();
  homePage.logoImg.waitForDisplayed(5000);
  axeVioltations = browser.returnAxeViolations();
});

describe("run accessibility scan", function() {
  it("should not have any new image-alt violations", function() {
    assert.ok(
      findViolationCountById("image-alt") === 6,
      "new image-alt Axe violations introduced"
    );
  });
  it("should not have any new label violations", function() {
    assert.ok(
      findViolationCountById("label") === 5,
      "new label Axe violations introduced"
    );
  });
});

after(function() {
  console.log("writing axe violations to /reports");
  fs.writeFileSync(
    "./reports/homePageAccessibilityAudit.json",
    JSON.stringify(axeVioltations, null, 2),
    err => {
      if (err) throw err;
    }
  );
});
