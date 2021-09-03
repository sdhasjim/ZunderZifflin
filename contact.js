$(document).ready(function() {
    hideResponsive();
});

function hideResponsive() {
    $(window).resize(function() {
        if ($(this).width() > 800) {
            $('.responsive-navbar').css('display', 'none');
        }
    });
}