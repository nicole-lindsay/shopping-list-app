$(document).ready(function() {
    $('#add').click(function() {
        $('.need').append('<li><span class="check">&#10004;</span><span class="need-text">' + $('input').val() + '</span><span class="ex">&#10006;</span></li>');
        $('input').val('');
    });
    $('ul').on('click', '.check', function(event) {
        $('.cart').append('<li><span class="arrow">&#8673;</span><span class="cart-text">' + $(this).siblings('.need-text').text() + '</span><span class="ex">&#10006;</span></li>');
        $(this).parent().remove();
    });
    $('ul').on('click', '.arrow', function(event) {
    	$('.need').append('<li><span class="check">&#10004;</span><span class="need-text">' + $(this).siblings('.cart-text').text() + '</span><span class="ex">&#10006;</span></li>');
    	$(this).parent().remove();
    });
    $('ul').on('click', '.ex', function(event) {
    	$(this).parent().remove();
    });
});