const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebPackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: '[name].bundle.[hash].js',
        path: path.resolve(__dirname,'dist')
    },
    plugins: [
        new CleanWebPackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'My Project',

        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: ['babel-loader']
            },
            {
                test: /\.(hbs|handlebars)/,
                use: [
                    'handlebars-loader'
                ]
            }
        ]
    }
};
