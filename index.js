$(function() {
    var elemento = $('.jogos a');

    $(elemento).hover(function() {
        $(this).animate({
            'margin-top': -15,
        }, 250)
    }, function() {
        $(this).animate({
            'margin-top': 0,
        }, 250)
    });

});
