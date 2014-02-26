
fis.command = {};

fis.command.list = {};

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
};

fis.command.register = fis.command.reg = function(option){
	option = option || {
		name: '',
		desc: '',
		callback: function(){}
	};
	fis.command.list['fis-command-' + option.name] = option;
}