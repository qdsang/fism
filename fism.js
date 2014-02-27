var fis = module.exports = require('fis');

fis.cli.name = "fism";
fis.cli.info = fis.util.readJSON(__dirname + '/package.json');

// 加载命令控制
require('./lib/command.js');

// 加载默认配置
require('./conf/fis-conf.js');

(function(){
    var filename = 'fis-conf.js', conf = '',
        root = fis.util.realpath(process.cwd());

    //try to find fis-conf.js
    var cwd = root, pos = cwd.length;
    do {
        cwd  = cwd.substring(0, pos);
        conf = cwd + '/' + filename;
        if(fis.util.exists(conf)){
            root = cwd;
            break;
        } else {
            conf = false;
            pos = cwd.lastIndexOf('/');
        }
    } while(pos > 0);
    
    if (conf) require(conf);
})();


//fis.cli.info.dependencies = fis.command.getDependencies();

fis.cli._run = fis.cli.run;
fis.cli.run = function(argv){
    var name = argv[2] || fis.command.default;
    var command = fis.command.get(name);
    
    if (command){
        var cmd = fis.require('command', 'release');
        cmd.register({
            option: function(){return this;},
            action: function(callback){

                var option = fis.command.getOptions();
                console.log('当前环境：' + name);
                console.log('当前配置：' + JSON.stringify(option));

                fis.command.option({file: ''});
                command.callback && command.callback();
                callback && callback(option);

                return this;
            }
        });
    } else {
        fis.cli._run(argv);
    }
}





