$(".need").append('<li><span class="check">&#10004;</span><span class="text">'+$("input").val()+'</span><span class="ex">&#10006;</span></li>');
$(document).ready(function() {
    $('#add').click(function() {
        $('.need').append('<li><span class="check">&#10004;</span><span class="need-text">' + $('input').val() + '</span><span class="ex">&#10006;</span></li>');
    });
    $('ul').on('click', '.check', function(event) {
        $('.cart').append('<li><span class="arrow">&#8673;</span><span class="cart-text">' + $('.need-text').val() + '</span><span class="ex">&#10006;</span></li>');
    });
});

