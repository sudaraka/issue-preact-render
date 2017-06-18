/**
 * webpack.config.babel.js: Webpack configuration
 *
 * Copyright 2017 Sudaraka Wijesinghe <sudaraka@sudaraka.org>
 *
 * This program comes with ABSOLUTELY NO WARRANTY;
 * This is free software, and you are welcome to redistribute it and/or modify
 * it under the terms of the BSD 2-clause License. See the LICENSE file for more
 * details.
 *
 */

import { resolve } from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

export default () => ({
  'context': resolve('src'),

  'entry': { 'index.js': './index.js' },

  'output': {
    'path': resolve('docs'),
    'publicPath': '.',
    'filename': '[name]'
  },

  'module': {
    'loaders': [ {
      'test': /\.js$/,
      'exclude': /node_modules/,
      'loaders': [ 'babel-loader' ]
    } ]
  },

  'plugins': [ new HtmlWebpackPlugin({
    'filename': 'index.html',
    'template': './index.html',
    'minify': {
      'collapseBooleanAttributes': true,
      'collapseInlineTagWhitespace': true,
      'collapseWhitespace': true,
      'decodeEntities': true,
      'removeAttributeQuotes': true,
      'removeComments': true,
      'removeEmptyAttributes': true,
      'removeRedundantAttributes': true,
      'removeScriptTypeAttributes': true,
      'removeStyleLinkTypeAttributes': true,
      'useShortDoctype': true
    }
  }) ]
})
