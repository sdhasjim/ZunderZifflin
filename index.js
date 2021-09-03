$(document).ready(function() {
    autoHideNavBarWhenScroll();
    sliderhome();
    autoChangeSliderImage();
    initAOS();
    onClickButton();
    // toogleNavbar();
    hideResponsive();
});

function hideResponsive() {
    $(window).resize(function() {
        if ($(this).width() > 800) {
            $('.responsive-navbar').css('display', 'none');
        }
    });
}


function initAOS() {
    AOS.init({
        duration: 500,
    })
}

function toogleNavbar() {
    let nav = $(".responsive-navbar").eq(0);

    if (nav.css('display') == 'none') {
        nav.css('display', 'flex');
        nav.animate({
            right: "0px"
        }, 300)
    } else {
        nav.animate({
            right: "-260px"
        }, function() {
            nav.css('display', 'none');
        })

    }
}


function onClickButton() {

    // regis btn
    let regisBtn = document.querySelector(".regis-btn");
    regisBtn.onclick = function() {
        window.open("registration.html", "_self");
        window.focus();
    }

    // regis btn responsive
    let regisBtnResponsive = document.querySelector(".regis-btn-responsive");
    regisBtnResponsive.onclick = function() {
        window.open("registration.html", "_self");
        window.focus();
    }


    // see product button on main
    let seeProductBtn = document.querySelector(".see-product");
    seeProductBtn.onclick = function() {
        window.open("product.html", "_self");
        window.focus();
    }
}

function autoHideNavBarWhenScroll() {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            $('.navbar').css('top', "0px");
        } else {
            $('.navbar').css('top', "-128px");
        }
        prevScrollpos = currentScrollPos;
    }
}

function sliderhome() {
    let images = $('.image-container img');
    let index = 0;
    images.hide();
    images.eq(index).show();

    $('#prev').click(function() {
        images.eq(index).animate({
            left: '-100px',
            opacity: 0
        }, function() {
            images.eq(index).hide();
            if (index == 0) {
                index = images.length - 1;
            } else {
                index -= 1;
            }

            images.eq(index).show();
            images.eq(index).css('left', '100px');
            images.eq(index).css('opacity', '0');
            images.eq(index).animate({
                left: '0px',
                opacity: 1
            });
        });
    });




    $('#next').click(function() {
        images.eq(index).animate({
            left: '100px',
            opacity: 0
        }, function() {
            images.eq(index).hide();
            if (index == images.length - 1) {
                index = 0;
            } else {
                index += 1;
            }

            images.eq(index).show();
            images.eq(index).css('left', '-100px');
            images.eq(index).animate({
                left: '0px',
                opacity: 1
            });
        });
    });
}


function autoChangeSliderImage() {

    let nextButton = $('.buttonSlider #next');

    window.onload = function() {
        setInterval(function() {
            nextButton.click();
        }, 5000);
    }
}