var fs = require('fs')
var path = require('path')

module.exports = function(dirname, ext, callback){
	var extension = "." + ext
	var results = [];
	fs.readdir(dirname, function(err, list){
		if(err){
			callback(null, err)
		}
		else{

			list.forEach(function(file){
				if(path.extname(file)== extension){
					results.push(file)
				};
			});
			callback(null, results)
		}
	})
}