module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        webdriver: {
            test: {
                configFile: "./test/config/suite.mocha.conf.js"
            }
        }
    });

    // test tasks
    grunt.loadNpmTasks("grunt-mocha");
    grunt.loadNpmTasks("grunt-webdriver");
    grunt.registerTask("test", ["webdriver:test"]);
};
