$(function() {

    $('#senha').keyup(function() {
        var txt = $(this).val();
        var forca = 0;
        var regFonte = new RegExp(/[a-z]/i);
        var regNum = new RegExp(/[0-9]/i);
        var regEspecial = new RegExp(/[^a-z0-9]/i);

        if (txt.length > 6) {
            forca += 25;
        }
        if (regFonte.test(txt)) {
            forca += 25;
        }
        if (regNum.test(txt)) {
            forca += 25;
        }
        if (regEspecial.test(txt)) {
            forca += 25;
        }

        if (forca >= 75) {
            var aceita = 'Senha Forte!';
        }
        else {
            var aceita = 'Senha Fraca!';
        }

        $('.forca').html('Força de senha: ' + forca + '% - ' + aceita);
    });

});
