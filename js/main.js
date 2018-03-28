$(function() {
    $('a[href="#design"]').click(function() {
        $('html, body').animate({
            scrollTop: $("#design").offset().top - 60
        }, 400);
    });
    $('a[href="#projects"]').click(function() {
        $('html, body').animate({
            scrollTop: $("#projects").offset().top - 60
        }, 400);
    });
    $('a[href="#art"]').click(function() {
        $('html, body').animate({
            scrollTop: $("#art").offset().top - 60
        }, 400);
    });
    $('a[href="#about"]').click(function() {
        $('html, body').animate({
            scrollTop: $("#about").offset().top - 60
        }, 400);
    });
});