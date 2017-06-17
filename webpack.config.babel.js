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
import { optimize, DefinePlugin, NamedModulesPlugin } from 'webpack'
import merge from 'webpack-merge'

export default env => {
  const
    baseConfig = {
      'context': resolve('src'),

      'entry': { 'index.js': './index.js' },

      'output': {
        'path': resolve('docs'),
        'publicPath': '/',
        'filename': '[name]'
      },

      'resolve': {
        'alias': {
          'Action': resolve('src/actions/'),
          'App': resolve('src/'),
          'Component': resolve('src/components/'),
          'Data': resolve('src/data/'),
          'Reducer': resolve('src/data/reducers/')
        }
      },

      'module': {
        'loaders': [
          {
            'test': /\.js$/,
            'exclude': /node_modules/,
            'loaders': [ 'babel-loader' ]
          }
        ]
      },

      'plugins': [
        new HtmlWebpackPlugin({
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
        })
      ]
    },

    productionConfig = {
      'plugins': [
        new DefinePlugin({ 'process.env': { 'NODE_ENV': JSON.stringify('production') } }),
        new optimize.UglifyJsPlugin({ 'comments': false })
      ]
    },

    developmentConfig = {
      'performance': { 'hints': false },

      'plugins': [
        new DefinePlugin({ 'process.env': { 'NODE_ENV': JSON.stringify('development') } }),
        new NamedModulesPlugin()
      ],

      'devtool': 'eval',

      'devServer': {
        'host': '127.0.0.1',
        'port': 5000,

        'historyApiFallback': true,

        'clientLogLevel': 'warning',
        'stats': 'errors-only'
      }
    }

  // return merge(baseConfig, env.prod ? productionConfig : developmentConfig)
  return merge(baseConfig, developmentConfig)
}
