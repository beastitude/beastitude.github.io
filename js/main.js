$(function() {
    $('a[href="#design"]').click(function() {
        $('html, body').animate({
            scrollTop: $("#design").offset().top - 30
        }, 400);
    });
    $('a[href="#projects"]').click(function() {
        $('html, body').animate({
            scrollTop: $("#projects").offset().top - 30
        }, 400);
    });
});