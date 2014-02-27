
fis.config.merge({
    namespace: '',
    //server settings
    server : {
        clean : {
    //        include : /\/(static|template|map|java)\//
        }
    },
    //plugins
    modules : {
        parser : {
            //.tmpl后缀的文件使用fis-parser-utc插件编译
        //    tmpl : 'utc',
            //.coffee后缀的文件使用fis-parser-coffee-script插件编译
        //    coffee : 'coffee-script',
            //.less后缀的文件使用fis-parser-less插件编译
        //    less : 'less'
        },
        postprocessor : {
        //    js : 'jswrapper, require-async'
        },
        //postpackager : 'modjs'
    },
    //plugin settings
    settings : {
        parser : {
            'coffee-script' : {
                //不用coffee-script包装作用域
                bare : true
            }
        },
        postprocessor : {
            jswrapper : {
                type : 'amd'
            }
        },
        lint : {
            //设置jshint插件要排除检查的文件，默认不检查lib、jquery、backbone、underscore等文件
            //使用spmx release命令时，添加--lint或-l参数即可生效
            jshint : {
            //    ignored : [ 'lib/**', /jquery|backbone|underscore/i ]
            }
        },
        spriter : {
            csssprites : {
                margin : 20
            }
        },
        optimizer : {
            'png-compressor' : {
                type : 'pngquant'
            }
        },
        postpackager : {
            modjs : {
                subpath : 'pkg/map.js'
            }
        }
    },
    roadmap : {
        ext : {
            jade : 'html',
            sass : 'css',
            scss : 'css',
            less : 'css',
            coffee : 'js'
        }
    }
});
