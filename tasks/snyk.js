/*
 * grunt-snyk
 * https://github.com/dylanb/grunt-snyk
 *
 * Copyright (c) 2016 Dylan Barrell
 * Licensed under the MIT license.
 */

'use strict';
var snyk = require('snyk');

module.exports = function(grunt) {
  grunt.registerTask('snyk', 'Test for dependency vulnerabilities using Snyk', function() {
    var options = this.options({});
    var done = this.async();
    snyk.test(process.cwd(), options, function (err, result) {
      if (err) {
        grunt.log.writeln('An error occurred: ', err);
        done(false);
      }
      if (!result.ok) {
        grunt.log.errorlns(result.summary);
        result.vulnerabilities.forEach(function (v) {
          grunt.log.subhead('\tVulnerability: ' + v.title);
          grunt.log.writeln('\t\tModule: ' + v.moduleName + '@' + v.version);
          grunt.log.writeln('\t\tFrom: ' + v.from.join(' --> '));
        });
        done(false);
      } else {
        grunt.log.writeln(result.summary);
        done();
      }
    });
  });

};
