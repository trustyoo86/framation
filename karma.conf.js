/**
 * karma test config
 */
require('babel-register');

'use strict'

const webpackConfig = require('./tools/dev')

module.exports = function (config) {
  config.set({
    basePAth: '',

    frameworks: ['mocha', 'chai', 'phantomjs-shim'],

    files: [
      'node_modules/chai/chai.js',
      'src/**/*.ts',
      'test/**/*.spec.ts'
    ],

    exclude: [
      '**/*.swp'
    ],

    reporters: ['verbose', 'spec', 'coverage'],

    failOnemptyTestSuite: false,

    webpack: {
      devtool: '#source-map',
      module: webpackConfig.module,
      resolve: webpackConfig.resolve,
    },

    webpackMiddleware: {
      quiet: true,
      stats: {
        colors: true
      }
    },

    preprocessors: {
      'src/**/*.ts': ['webpack', 'coverage'],
      'test/**/*.spec.ts': ['webpack', 'sourcemap']
    },
    
    coverageReporter: {
      type: 'text',
    },

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    browsers: ['PhantomJS'],

    browserConsoleLogOptions: {
      level: 'log',
      format: '%b %T %m',
      terminal: true
    },

    singleRun: true,

    concurrency: Infinity
  })
};