const { merge } = require('webpack-merge');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const commonConfig = require('./webpack.common');
const ModuleFederation = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('../package.json');
const devConfig = {
  mode: 'development',
  entry: "./src/marketingIndex.js",
  devServer: {
    port: 8081,
    historyApiFallback: {
      index: 'index.html'
    }
  },
  plugins: [
    new ModuleFederation({
      name: 'marketing',
      filename: 'marketingEntry.js',
      exposes: {
        '.': './src/marketingBootstrap.js'
      },
      shared: packageJson.dependencies
    })
    ,
    new HTMLWebpackPlugin({
      template: './public/index.html'
    })
  ]
};

module.exports = merge(commonConfig, devConfig);