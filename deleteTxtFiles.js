var path = require('path');
var fs = require('fs');
var curpath = path.join();

fs.readdir(curpath, function(err, files){
	if (err) 
		return console.log("Unable to get files in " + curpath);
	files.forEach(function (file) {
		var length = file.length;
		if(file.substring(length-3) == 'txt'){
			fs.unlink(file, function (err) {
				if (err)
					return console.log("Unable to delete file " + file);
				console.log(file + ' Deleted!');
			});
		}
	});
});
