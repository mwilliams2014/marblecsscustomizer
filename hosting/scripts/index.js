$(function() {
	var customizer = {
		readScss: function() {
			$.when($.get('assets/_variables.scss')).done(
				function(res) {
					console.log(res);
				}
			);
		}
	}

});