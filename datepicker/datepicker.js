$(function () {

  var elemento = $('.horaescolha');

  var horaescolhaCampo;

  $('input').focus(function() {
    var pos = $(this).offset();
    var width = $(this).width();


    $(elemento).css('left', pos.left + width + 15);
    $(elemento).css('top', pos.top);
    $(elemento).fadeIn();

    horaescolhaCampo = $(this);
  });

  $('input').blur(function() {
    setTimeout(function() {
      $(elemento).hide();
    }, 200);
  });

  $('button').click(function() {
    var hora = $(this).html();
    horaescolhaCampo.val(hora);
  });

});
