var internals = {};

exports.getMessageJSON = internals.getMessageJSON = function (input) {
	var output = null;
	try {
		output = JSON.parse(input);
	} catch (e) {
		output = null;
	}
	return output;
}