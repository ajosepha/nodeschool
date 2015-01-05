require('./modular.js')
var dirname = process.argv[2]
var ext = process.argv[3]

modular(dirname, ext function(err, filenames){
	for(i = 0; i < filenames.length; i++){
		console.log(filenames[i])
	}
})