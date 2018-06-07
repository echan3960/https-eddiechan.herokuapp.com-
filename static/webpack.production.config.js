const webpack = require('webpack');
const Clean = require('clean-webpack-plugin');
const Html = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

let TARGET = process.env.npm_lifecycle_event;

let config = {
  entry: '',
  path: '',
  filename: '',
  plugins: [],
  externals: {}
};

// the path(s) that should be cleaned
let pathsToClean = [];
let htmls = [
  // new Html({ filename: 'index.html', template: 'src/html/index.html'}),
];
if (TARGET === 'build') {
  config.entry += './src/js/index.jsx';
  config.path += __dirname + '/dist';
  config.filename += 'bundle.js';
  pathsToClean.push('dist');
}

module.exports = {
  entry: config.entry,
  output: {
    path: config.path,
    filename: config.filename,
  },
  resolve: {
    extensions: [".js", ".jsx", ".css"]
  },
  externals: config.externals,
  module: {
    rules: [
      { test: /\.jsx?/, exclude: /node_modules/, use: 'babel-loader' },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader']
        })
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader', 'sass-loader']
        })
      },

      { test: /\.(png|svg|jpg|gif)$/, use: 'file-loader' }
    ]
  },
  plugins: config.plugins.concat([
    new ExtractTextPlugin('styles.css'),
    new Clean(pathsToClean),
  ]).concat(htmls)
};