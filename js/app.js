$(document).ready(function() {
	$('#add').click(function() {
		$('.need').append('<li><span class="check">&#10004;</span>'+ $('input').val() +'<span class="ex">&#10006;</span></li>');
	});
});