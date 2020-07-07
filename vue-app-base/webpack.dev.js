const merge = require('webpack-merge')
const path = require('path')
const baseConfig = require('./webpack.common')
const webpack = require('webpack')
module.exports = merge(baseConfig, {
  mode: 'development',
  output: {
    publicPath: '/'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    open: true,
    hot: true
  },
  plugins: [
    // 启用模块热替换(HMR)
    new webpack.HotModuleReplacementPlugin(),
    // 当开启 HMR 的时候使用该插件会显示模块的相对路径
    new webpack.NamedModulesPlugin()
  ]

})
