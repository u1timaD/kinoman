const path =  require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
// const WebpackDevServer = require('webpack-dev-server');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  // devServer: 3000,
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
    },
  devtool: 'source-map',
  plugins: [
    // new WebpackDevServer(),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [{ from: 'public' }]
      // patterns: [
      //   { from: path.resolve(__dirname, 'public'),
      //     to: path.resolve(__dirname, 'build')
      //   }
      // ],
    })
  ],
  module: {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
      },
    },
  ],
},
  devServer: {
    hot: true,
    open: true
  }
}