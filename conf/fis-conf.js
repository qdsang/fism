
fis.config.merge({
    //server settings
    server : {
        clean : {
            include : /\/(static|template|map|java)\//
        }
    },
    roadmap : {
        //specifications
        path : [
            {
                reg : /^\/(widget|layout|block)\/.*\.js$/i,
                isMod : true,
                release : '/static/${namespace}/$&'
            },
            {
                reg : /^\/(.*\.class\.php)$/i,
                url : '${namespace}/$1',
                release : '/template/${namespace}/$1',
                isClass : true,
                useMap : true
            },
            {
                reg : /^\/(.*\.php)$/i,
                url : '${namespace}/$1',
                release : '/template/${namespace}/$1',
                isMod : true,
                useMap : true
            },
            {
                reg : '${namespace}-map.json',
                release : '/map/$&'
            },
            {
                reg : /^\/(static\/)?(.*)$/,
                release : '/static/${namespace}/$2'
            }
        ]
    },
    //plugins
    modules : {
        preprocessor : {
            js  : 'phiz-js',
            php : 'phiz-js'
        },
        postprocessor : {
            php : 'phiz-wrapper'
        },
		postpackager : 'phiz'
    },
    //plugin settings
    settings : {
        optimizer : {
            'png-compressor' : {
                type : 'pngquant'
            }
        }
    }
});




fis.command.register({name: 'dev', callback: function(){
    fis.command.options = {
        dest: 'preview',
        md5: 5,
        domains: false,
        lint: false,
        test: false,
        optimize: false,
        pack: true,
        watch: false,
        live: false,
        clean: false,
        root: '',
        file: '',
        unique: ''
    }

    fis.config.merge({
        roadmap : {
            //specifications
            path : [
                {
                    reg : /^\/(widget|layout|block)\/.*\.js$/i,
                    isMod : true,
                    release : '/static/${namespace}/$&'
                },
                {
                    reg : /^\/(.*\.class\.php)$/i,
                    url : '${namespace}/$1',
                    release : '/template/${namespace}/$1',
                    isClass : true,
                    useMap : true
                },
                {
                    reg : /^\/(.*\.php)$/i,
                    url : '${namespace}/$1',
                    release : '/template/${namespace}/$1',
                    isMod : true,
                    useMap : true
                },
                {
                    reg : '${namespace}-map.json',
                    release : '/map/$&'
                },
                {
                    reg : /^\/(static\/)?(.*)$/,
                    release : '/static/${namespace}/$2'
                }
            ]
        }
    });
}});