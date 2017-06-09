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
						instance.sassArray.push({
							'variable': res[1],
							'value': res[2]
						});
					}
				}
			)

			// console.log(instance.sassArray);
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