var Crunch = require('crunch');
var Persistence = require('./lib');
var Config = require('./config/databases');

var dbconfig = Config.sequelize;
var scurvy = require('scurvy').createInstance();
var virt_modules = [];
virt_modules.scurvy = scurvy;

var models = require('cartography-models');
models.init(dbconfig, virt_modules, function() {
	console.log('mysql database setup complete');
	
	//TODO: startup, running code that is currently below.
});

var relay = {};
var router = {};
router.save = function (obj) {
	//TODO
	console.log(obj);
}

relay.message = function (message) {
	var msgObj = Persistence.Utils.getMessageJSON(message);
	if (msgObj != null && msgObj.cmd) {
		//message is good, its valid json
		if (typeof (router[msgObj.cmd]) == 'function') {
			router[msgObj.cmd](msgObj);
		}
	}
}

