const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function getCurPath(p) {
    return path.join(__dirname, p)
}

module.exports = {
    entry: getCurPath('src/js/index.js'),
    output: {
        path: getCurPath('dist'),
        filename: 'main.[hash].js'
    },
    module: {
        rules: [
            {
                test: /\.css/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: getCurPath('src/index.html'),
        })
    ]
}