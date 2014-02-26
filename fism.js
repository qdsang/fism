var fis = module.exports = require('fis');

fis.cli.name = "fism";
fis.cli.info = fis.util.readJSON(__dirname + '/package.json');

// 加载命令控制
require('./lib/command.js');

// 加载默认配置
require('./conf/fis-conf.js');


fis.cli.info.dependencies = fis.command.list;

fis.cli._run = fis.cli.run;
fis.cli.run = function(argv){
    var mode = argv[2] || '';
    var command = fis.command.list['fis-command-'+mode];
    
    if (command){
        var cmd = fis.require('command', 'release');
        cmd.register({
                option: function(){return this;},
                action: function(callback){
                    command.callback && command.callback();
                    callback && callback(fis.command.options);
                    return this;
                }
            });
    }else {
        fis.cli._run(argv);
    }
}





