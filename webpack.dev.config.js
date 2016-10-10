const webpack = require('webpack');
const path = require('path');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

const PATHS = {
  src: path.resolve(__dirname, './src/js'),
  build: path.resolve(__dirname, './build')
}

module.exports = {
  entry: {
    bundle: path.resolve(PATHS.src, 'main.jsx')
  },
  output: {
    path: PATHS.build,
    filename: 'js/[name].js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'react-hot!babel!eslint',
        exclude: /node_modules/
      },
      {
        test: /\.(css|scss)$/,
        loader: 'style!css?sourceMap!sass'
      },
      {
        test: /\.(ttf|eot|svg|woff|woff2)/,
        loader: 'url?limit=8192'
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=8192'
      }
    ]
  },
  plugins: [
    new OpenBrowserPlugin({ url: 'http://localhost:5000' })
  ],
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss'],
  },
  devServer: {
    contentBase: './src',
    port: 5000,
    historyApiFallback: true
  },
  devtool: 'eval'
};
