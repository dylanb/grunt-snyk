'use strict';

var mockery = require('mockery');
var grunt = {
  registerTask: function () {},
  log: {
    writeln: function () {},
    subhead: function () {},
    errorlns: function () {}
  }
};
/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.snyk = {
  setUp: function(done) {
    mockery.enable();
    mockery.enable({ useCleanCache: true });
    mockery.registerAllowable('../tasks/snyk.js');
    mockery.registerAllowable('snyk');
    done();
  },
  custom_options: function(test) {
    var snyk, tasks, cb;
    var opts = {
      one: '1', two: '2'
    };
    test.expect(4);
    snyk = require('snyk');
    snyk.test = function (path, options, cb) {
        test.deepEqual(options, opts);
        cb(null, {ok:true, summary: 'thing'});
      };
    tasks = require('../tasks/snyk.js');
    grunt.registerTask = function(name, desc, func) {
      test.equal(name, 'snyk');
      test.equal(typeof desc, 'string');
      test.equal(typeof func, 'function');
      cb = func;
    };
    tasks(grunt);
    cb.call({
      options: function () { return opts; },
      async: function () {
        return test.done;
      }
    });
  },
  tearDown: function (done) {
    mockery.disable();
    done();
  }
};
