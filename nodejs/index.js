const fs = require('fs');

let accent = fs.readFile(
	'main.scss',
	'utf-8',
	(err, res) => {
		console.log(res);
	}
);

let variables = fs.readFile(
	'_variables.scss',
	'utf-8',
	(err, res) => {
		console.log(res);
	}
);