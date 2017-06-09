$(function() {
	var REGEX = /^\$([\w\-]+): ([^!]+) !default;/g;
	var customizer = {

		formatData: function(data) {
			var instance = this;

			instance.sassArray = [];

			data.forEach(
				function(line) {
					var res = REGEX.exec(line);

					if (!!res) {
						console.log(res);

						console.log(res[1] + ' ' + res[2]);

						instance.sassArray.push({
							'variable': 'hi',
							'value': 'bye'
						});
					}
				}
			)

			console.log(instance.sassArray);
		},

		readFile: function() {
			var instance = this;

			$.when($.get('assets/_variables.scss')).done(
				function(data) {
					data = data.split('\n');
					console.log(data);
					instance.formatData(data);
				}
			);
		}
	}

	customizer.readFile();
});