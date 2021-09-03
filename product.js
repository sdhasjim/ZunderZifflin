$(document).ready(function() {
    scrollToProduct();
    // hoverToShowItemDesc();
    hideResponsive();
});

function hideResponsive() {
    $(window).resize(function() {
        if ($(this).width() > 800) {
            $('.responsive-navbar').css('display', 'none');
        }
    });
}


function scrollToProduct() {
    let exploreBtn = document.querySelector(".explore");
    exploreBtn.onclick = function() {
        let target = $('.product-category');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
}


function hoverToShowItemDesc() {

    let productDesc = $('.hide');
    productDesc.hide();

    $('.product-item').hover(function() {
            let index = $("body").index();
            let thisProductItemDesc = $('.hide').eq(index).animate({
                top: '0',
                left: '0'
            }, 1);
            let thisProductItem = $(".product-item img").eq(index).hide(300);
            thisProductItemDesc.show(300);

        },
        function() {
            let index = $("body").index();

            let thisProductItemDesc = $('.hide').eq(index).animate({
                top: '0',
                left: '0'
            }, 1);
            thisProductItemDesc.hide(300);
            let thisProductItem = $(".product-item img").eq(index).show(300);
            alert(index);
        });
}