var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './app/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'build.js'
  },
  resolve: {
       alias: {
           'vue': 'vue/dist/vue.js'
       }
  },
  module: {
    rules: [
       {
           test: /\.vue$/,
           loader: 'vue-loader'
       },
       {
           test: /\.js$/,
           loader: 'babel-loader',
           exclude: /node_modules/
       }
   ]
  },
  plugins: [
    new webpack.ExternalsPlugin('commonjs', [
           'electron'
       ])
  ]
}
