var webpack = require('webpack');
var path = require('path');
var precss       = require('precss');
var autoprefixer = require('autoprefixer');

module.exports = {
  entry: [
    'babel-polyfill',
    path.resolve(__dirname, 'src/app.jsx')
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  plugins: [
    // new webpack.ProvidePlugin({
    //   Promise: 'imports?this=>global!exports?global.Promise!es6-promise',
    //   fetch: 'imports?this=>global!exports?global.fetch!whatwg-fetch',
    // }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"',
      DEVELOPMENT: true,
      DEBUG: true,
    })
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loaders: ['babel']
    }, {
      test: /\.css$/,
      loader: 'style!css!postcss-loader'
    }, {
      test: /\.scss$/,
      loader: 'style!css!sass!postcss-loader'
    }, {
      test: /\.(png|jpg)$/,
      loader: 'url?limit=50000'
    }, {
      test: /\.woff2?$|\.eot$|\.svg$|\.ttf/,
      loader: 'url?limit=100000'
    }]
  },
  postcss: function () {
      return [precss, autoprefixer];
  }
};
