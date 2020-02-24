const axeSource = require("axe-core").source;

module.exports = {
  returnAxeViolations: function() {
    // run inside browser and get results
    browser.execute(axeSource);
    const results = browser.executeAsync(function(done) {
      axe.run(function(err, results) {
        if (err) done(err);
        done(results);
      });
    });

    return results;
  }
};
