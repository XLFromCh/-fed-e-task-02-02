const merge = require('webpack-merge')
const baseConfig = require('./webpack.common')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')

module.exports = merge(baseConfig, {
  mode: 'production',
  devtool: 'source-map',
  output: {
    publicPath: './'
  },
  plugins: [
    new CleanWebpackPlugin()
  ],
  optimization: {
    minimizer: [
      // 压缩css
      new OptimizeCssAssetsWebpackPlugin({}),
      // 压缩JS
      new TerserWebpackPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      })
    ]
  }

})
