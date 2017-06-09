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

			$.when($.get('assets/variables.scss')).done(
				function(data) {
					data = data.split('\n');

					instance.formatData(data);
				}
			);
		},

		renderColorInput: function(data) {
			var instance = this;

			var fragment = document.createDocumentFragment();

			fragment.innerHTML = `<label class="txtLabel" for="${data.variable}">${data.variable}</label>
				<input type="color" class id="${data.variable}" value="${data.value}">`
		},

		renderTextInput: function(data) {
			var instance = this;

			var fragment = document.createDocumentFragment();

			fragment.innerHTML = `<label class="txtLabel" for="${data.variable}">${data.variable}</label>
				<input type="text" class id="${data.variable}" value="${data.value}">`
		}
		
		generateSass: function(){
			var bp = $('.boilerplate-imports').val();
			var anc = document.getElementById('generateBtn');
			var sentTxt = "";
			$('*[class*=txtLabel]').each(function() {
    		sentTxt = sentTxt + "  " + $(this).text() + ": " + $(this).next("input").val() + ";" + "\n";
			});			
			anc.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(sentTxt + "\n" + bp);
			anc.download = 'main.scss';
		}
		
	}

	customizer.readFile();
});