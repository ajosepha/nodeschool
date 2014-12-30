var fs = require('fs')

var fileName = process.argv[2]

function aSync(){
	fs.readFile(fileName, function callback(err, data){
		if(err){
			console.log("there was an error")
		}
		else{
			contents = data.toString();
			console.log(contents.split('\n').length - 1);
		}
		
	})
}

aSync();