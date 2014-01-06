var Crunch = require('crunch');
var Persistence = require('./lib');
var Config = require('./config/databases');

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

