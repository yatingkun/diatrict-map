//webpack.production.config.js
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
    entry: __dirname + "/src/main.js",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    devtool: "null",
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader"
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [{
                        loader: "css-loader",
                    }]
                })
            },
            {
                test: /\.(jpg|jpeg|png|gif|ico|svg)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            localIdentName: '[name].[hash].[ext]'
                        }
                    }
                ],
                exclude: /node_modules/
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            localIdentName: '[name].[hash:7].[ext]'
                        }
                    }
                ]
            },
            ]
    },
  
};