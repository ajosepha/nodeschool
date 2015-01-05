var fs = require('fs')
var path = require('path')

module.exports = function(dirname, ext, callback){
	var extension = "." + ext
	var results = [];
	fs.readdir(dirname, function(err, list){
		if(err){
			callback(err)
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

// solution_filter.js:

//     var fs = require('fs')
//     var path = require('path')

//     module.exports = function (dir, filterStr, callback) {

//       fs.readdir(dir, function (err, list) {
//         if (err)
//           return callback(err)

//         list = list.filter(function (file) {
//           return path.extname(file) === '.' + filterStr
//         })

//         callback(null, list)
//       })
//     }