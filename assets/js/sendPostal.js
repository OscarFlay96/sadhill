$(function() {
    $('#btnEnviarPostal').on('click', function() {
        $('#formEnviarPostal').foundation('validateForm');

        if ($('[data-invalid]').length != 0) return false;

        Email.send({
            SecureToken : "8a3bacad-1f47-403b-a4a3-21cd1f4e57a7",
            To : "sadhill@sadhill.tk",
            From : $('#email').val(),
            Subject : "Postal de Sad Hill",
            Body : $('#mensaje').val(),
            Attachments : [
            {
                name : "Posta-SadHill.jpg",
                path : "http://www.panibericana.com/wp-content/uploads/2016/10/Sad-Hill-Cementerio-Burgos-Clint-Eastwood-El-bueno-el-malo-y-el-feo-The-good-the-bad-and-the-ugly-Panibericana-13.jpg"
            }]
        }).then(
          message => {alert("Postal enviada"); location.reload();}
        );

        
    });

    $(document).on("submit", function(ev) {
        ev.preventDefault();
    });
});