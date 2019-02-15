'use strict';

const merge = require('webpack-merge');
const base = require('./base');
const webpack = require('webpack');

module.exports = merge(base, {
  mode: 'production',
  output: {
    filename: '[name].min.js',
  },
});