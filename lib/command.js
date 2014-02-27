
fis.command = {};

fis.command.default = ''

fis.command._list = {};

fis.command._options = {
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

fis.command.option = function(option){
	fis.util.merge(fis.command._options, option);
};

fis.command.register = function(name, callback){
	var option = option || {
		name: '',
		desc: '',
		callback: function(){}
	};
	if (typeof name == 'string') {
		option.name = name;
		option.callback = callback || option.callback;
	}else{
		option = name || option;
	}
	fis.command._list[option.name] = option;
};

fis.command.get = function(name){
	return fis.command._list[name];
};
fis.command.getOptions = function(name){
	return fis.command._options;
};
fis.command.getDependencies = function(){
	var ds = [];
	for (var key in fis.command._list){
		ds.push('fis-command-' + key);
	}
	return ds;
};

