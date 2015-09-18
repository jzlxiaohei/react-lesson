var gulp = require('gulp')
var gutil = require('gulp-util');

var webpack =  require('webpack')
var webpackConfig = require('./webpack.config.js')

var path = require('path');


//gulp.task('default',function(callback){
//    webpack(webpackConfig,function(err,stats){
//        if(err) {
//            throw new gutil.PluginError("webpack-dev", err);
//        }
//        if(typeof callback=='function'){
//            callback();
//        }
//    })
//})

var WebpackDevServer = require("webpack-dev-server");

function createTask(entryFile){
    var config = Object.create(webpackConfig);
    config.debug = true;
    config.devtool = 'eval'
    config.output.sourceMapFilename='[name].map'
    config.plugins = config.plugins ||[];
    config.plugins.push(new webpack.HotModuleReplacementPlugin())

    config.entry.index.push(entryFile)
    return new WebpackDevServer(webpack(config),{
        publicPath:config.output.publicPath,
        hot:true,
        inline: true,
        stats:{
            colors:true
        },
        lazy: false
    })

        //.listen(8080,'localhost',function(err){//8080,如果端口在使用，换一个
        //    if(err) throw new gutil.PluginError('webpack-dev-server',err);
        //})
}

gulp.task('l1',function(){
    var wpServer = createTask('./src/L2/index.js')
    wpServer.listen(8080,'localhost',function(err){//8080,如果端口在使用，换一个
        if(err) throw new gutil.PluginError('webpack-dev-server',err);
    })
})

gulp.task('l2',function(){
    var wpServer = createTask('./src/L1/index.js')
    wpServer.listen(8080,'localhost',function(err){//8080,如果端口在使用，换一个
        if(err) throw new gutil.PluginError('webpack-dev-server',err);
    })
})

gulp.task('l3',function(){
    var wpServer = createTask('./src/L3/index.js')
    wpServer.listen(8080,'localhost',function(err){//8080,如果端口在使用，换一个
        if(err) throw new gutil.PluginError('webpack-dev-server',err);
    })
})

gulp.task('l4',function(){
    var wpServer = createTask('./src/L4/index.js');
    wpServer.listen(8080,'localhost',function(err){//8080,如果端口在使用，换一个
        if(err) throw new gutil.PluginError('webpack-dev-server',err);
    })
})
