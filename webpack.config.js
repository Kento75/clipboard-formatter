const path = require('path')
const webpack = require('webpack')

// 変換対象から除外するモジュール
const externalPlugins = new webpack.ExtendedAPIPlugin('commonjs', [
  'app',
  'auto-updater',
  'browser-window',
  'content-tracing',
  'dialog',
  'electron',
  'global-shortcut',
  'ipc',
  'menu',
  'menu-item',
  'power-monitor',
  'protocol',
  'tray',
  'remote',
  'web-frame',
  'clipboard',
  'crash-reporter',
  'screen',
  'shell',
])

module.exports = {
  entry: {
    index: path.join(__dirname, 'src', 'index.js'),
  },
  output: {
    path: path.join(__dirname, 'out'),
    filename: '[name].js',
  },
  devtool: 'cheap-module-eval-soure-map',
  target: 'node',
  module: {
    rules: [
      {
        test: /.js$/,
        loader: 'babel-loader',
        options: {
          presets: ['env', 'react'],
        },
      },
    ]
  },
  plugins: [
    externalPlugins,
  ],
}