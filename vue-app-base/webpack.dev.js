const merge = require('webpack-merge');
const path = require('path');
const baseConfig = require('./webpack.common');
module.exports = merge(baseConfig, {
    mode: 'development',
    output: {
        publicPath: '/'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        open: true
    }
});
