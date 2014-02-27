


fis.command.register('dev', function(){
    fis.command.option({
        dest: 'preview',
        md5: 5,
        domains: false,
        lint: false,
        test: false,
        optimize: false,
        pack: true,
        watch: true,
        live: false,
        clean: false,
        root: '',
        file: '',
        unique: ''
    });
    
    fis.config.merge({
        roadmap : {
            //specifications
            path : []
        }
    });
});