require('babel-register');

const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    'framation': path.resolve(__dirname, '..', 'src', 'Framation.ts'),
  },
  output: {
    path: path.resolve('./dist'),
    libraryTarget: 'umd',
    library: 'Framation',
    libraryExport: 'default',
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.ts$/,
        use: [
          'awesome-typescript-loader'
        ],
        exclude: /node_modules/
      }
    ],
  },
};