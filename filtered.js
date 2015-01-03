var path = require('path');
var fs = require('fs');


fs.readdir(process.argv[2], function(err, list){
	if(err){
		console.log(err)
	}
	else{
		list.forEach(function(filename){
			if(path.extname(filename)=="." + process.argv[3]){
				console.log(filename)
			}
		})
	}
})

// path.extname --tell the extension of a file