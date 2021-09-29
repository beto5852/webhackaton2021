$ = jQuery.noConflict();
/*------------------------
INICIAMOS WOW
-------------------------*/
new WOW().init();

/*----------------------------------
Iniciamos smoothScroll (Scroll Suave)
--------------------------------*/

var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true
});

/*---------------------------------
    OCULTAR Y MOSTRAR BOTON IR ARRIBA
 ----------------------------------*/


$(document).scroll(function () {

    var scrolltop = $(this).scrollTop();
    if (scrolltop >= 50) {
        $(".ir-arriba").fadeIn();
    } else {
        $(".ir-arriba").fadeOut();
    }

});

