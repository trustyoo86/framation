require('babel-register');

const path = require('path');
const webpack = require('webpack');

const isProd = process.env.NODE_ENV === 'production'

const config = {
  entry: {
    'framation': path.resolve(__dirname, 'src', 'Framation.ts'),
  },
  devtool: isProd ? false : '#source-map',
  plugins: [],
  output: {
    filename: !isProd ? '[name].js' : '[name].min.js',
    path: path.resolve('./dist'),
    libraryTarget: 'umd',
    library: 'Animate'
  },
  resolve: {
    extensions: ['.ts', '.js']
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
    ]
  }
};

if (isProd) {
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin()
  )
}

module.exports = config;