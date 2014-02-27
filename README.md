fism 另外一种配置
=================

根据环境使用不一样的配置

例如在项目根目录下创建一个 fis-conf.js 文件，内容如下：
```javascript
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
```

就可以直接在命令行使用
```
fism dev
```

这样可以吧各种环境的不同配置都写入配置文件中，命令行的调用只需要敲入对应环境名，根据不同的配置进行生产


还可以直接设置默认的配置
```
fis.command.default = "dev";
```
powered by [fis](https://github.com/fis-dev/fis)
