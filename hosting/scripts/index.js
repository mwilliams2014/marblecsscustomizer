$(function() {

	$.when($.get('main.scss')).done(
		function(res) {
			console.log(res);
		}
	);

})