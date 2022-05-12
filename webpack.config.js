const path = require('path');
const { VueLoaderPlugin } = require('vue-loader/dist/index')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, '/src/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: '[name].js'
    },
    devServer: {
        port: 9000,
        hot: true,
        open: true,
        static: 
        {
            directory: path.resolve(__dirname, 'dist'),
        },
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    "css-loader",
                    "postcss-loader"
                ]
            },
            {
                test: /\.(scss|sass)$/,
                use: ['style-loader','css-loader','sass-loader', "postcss-loader" ]
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: ['url-loader']
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: path.resolve(__dirname, './index.html'),
          filename: 'index.html',
          title: 'easy vue components'
        }),
        new VueLoaderPlugin()
    ]
    
};