$(function() {

    $('.img-galeria').click(function() {
        var img = $(this).find('img').attr('src');

        $('.content-galeria img').attr('src', img);

        $('.galeria').show().css('opacity', 0);

        var imgX = $('.content-galeria').find('img').width();
        var imgY = $('.content-galeria').find('img').height();

        $('.content-galeria').css('top', 'calc(50% - ' + (imgY / 2) + 'px)');
        $('.content-galeria').css('left', 'calc(50% - ' + (imgX / 2) + 'px)');

        $('.galeria').css('opacity', 1).fadeIn('fast');

    });

    $('#btn-close').click(function() {
        $('.galeria').fadeOut('fast');
    });
});
