# grunt-snyk

> Test for dependency vulnerabilities using Snyk

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-snyk --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-snyk');
```

## The "snyk" task

### Overview
In your project's Gruntfile, add a section named `snyk` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  snyk: {
    options: {
      // Task-specific options go here. These will be passed directly to snyk
    }
  },
});
```

### Options

The options are passed directly to the `snyk.test` function. For documentation on Snyk, go to the [Snyk web page](https://snyk.io/docs/)

### Usage Examples

#### Default Options
In this example, the default options are used 

```js
grunt.initConfig({
  snyk: {
    options: {}
  }
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).
