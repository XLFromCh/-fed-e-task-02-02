const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpaclPlugin = require('html-webpack-plugin')


module.exports = {
    mode: "development",
    entry: "./src/main.js",
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /.md$/,
                use: './markdown-loader.js'
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpaclPlugin({
            template: './index.html'
        })
    ]
}