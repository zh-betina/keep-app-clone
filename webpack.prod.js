const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/client/app.js',
    output: {
        libraryTarget: 'var',
        library: 'Client'
    },
    module: {
        rules: [
            {
                test: '/\.js$',
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.html$/i,
                use: [{
                    loader: 'html-loader'
                }]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader'
                    }
                ]
            }
        ]
    },
    devServer: {
        port: 8081,
    },
    plugins: [
        new CleanWebpackPlugin({
            dry: true,
            verbose: true,
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false
        }),
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        })
    ]
}