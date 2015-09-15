var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require('webpack')
var path = require('path')
var AssetsPlugin         = require('assets-webpack-plugin');
var assetsPluginInstance = new AssetsPlugin({});


module.exports = {
    cache:true,
    //entry: "./client/Index.jsx",
    entry: {
        'index':[
            "webpack/hot/dev-server"
            //"./src/L1/index.js" //每个gulp文件自己push
        ]

    },
    output: {
        filename: "[name].js",
        chunkFilename:'[name].js',
        path: __dirname + "/dist",
        libraryTarget:'umd',
        //library:'libName',
        publicPath:'/assets/'//webpack-dev-server build的文件是在内存里的，使用时，在硬盘上看不到生成的文件。这个路径是静态文件的basePath
    },
    externals:{
        'react': {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react'
        },
        'jquery': {
            root: 'jQuery',
            commonjs2: 'jquery',
            commonjs: 'jquery',
            amd: 'jquery'
        }
    },
    module: {
        loaders: [
            {
                test: /[\.jsx|\.js ]$/,
                exclude: /node_modules/,
                loader: "babel-loader?stage=0&optional[]=runtime"
                //see https://babeljs.io/docs/usage/experimental/
                // https://github.com/babel/babel-loader
            },
            { test: /\.css$/, loader: "style!css" },
            {
                test: /\.less$/,
                loader: "style-loader!css-loader!less-loader"
            }
        ]
    },
    plugins: [
        //new ExtractTextPlugin("[name].css")
        //new webpack.HotModuleReplacementPlugin(),
        assetsPluginInstance,
        new webpack.OldWatchingPlugin()//新版的不知道为啥不watch，用这个可以临时解决。
    ]
}