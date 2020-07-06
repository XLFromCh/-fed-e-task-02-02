const merge = require('webpack-merge');
const path = require('path');
const baseConfig = require('./webpack.common');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = merge(baseConfig, {
    mode: 'production',
    devtool: 'source-map',
    output: {
        publicPath: './'
    },
    plugins: [
        new CleanWebpackPlugin()
    ]
});
