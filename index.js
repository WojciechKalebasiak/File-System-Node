var fs = require('fs');
var color = require('colors');
var StatMode = require('stat-mode');
// fs.readFile('./text.txt', 'utf-8', function(err, data) {
//     console.log('Text before saving:'.yellow);
//     console.log(data);
//     fs.appendFile('./text.txt', '\nRandom text', function(err) {
//         if (err) throw err;
//         console.log('Saved!'.red);
//         fs.readFile('./text.txt', 'utf-8', function (err, data) {
//         	console.log('After Saving: '.red)
//         	console.log(data);
//         });
//     });

// });

fs.readdir('.', function(err, files) {
	if(err) throw err;
	fs.writeFile('./files.txt', files, function (err) {
		if(err) throw err;
	});
});
