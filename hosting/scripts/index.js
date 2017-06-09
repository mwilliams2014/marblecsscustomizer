$(function() {

	$.when($.get('assets/main.scss')).done(
		function(res) {
			console.log(res);
		}
	);

});