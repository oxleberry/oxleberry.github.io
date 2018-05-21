

// Testomonial
var nextTest = 0;
var testLeng = testamonials.length;
// to grab the next Testomonial in rotation
function getTestamonials() {
    $('#testamonials div div').empty();
    if (nextTest === testLeng){
        nextTest = 0;
    }
    $('#testamonials div div').hide();
    $('#testamonials div div').append(
        `<h3>${testamonials[nextTest].praise}</h3><p>${testamonials[nextTest].name}</p>`
    );
    $('#testamonials div div').fadeIn(1000);
    nextTest++;
}

// DOCUMENT.READY
$(function(){

    // NAV BAR for small screens
    $('.hamburger').on('click', function() {
        $('.nav-collapse').slideToggle();
    });

    // Carousel using Slick
    // https://github.com/kenwheeler/slick/
    $('.slick-carousel').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true
    });

    // TESTAMONIALS
    setInterval(getTestamonials, 6000);

    // SMOOTH SCROLLING
    // https://stackoverflow.com/questions/31832227/jquery-smooth-scrolling-anchor-navigation
    $('header a, #highlights a').on('click', function(e) {
        e.preventDefault();
        var target = $(this).attr('href');
        $target = $(target);
        // determines if the link clicked goes back the "home"
        // (top of the page) or not.
        var offsetNum;
        if (target === '#home') {
            offsetNum = 300;
        } else {
            offsetNum = 50;
        }
        // smooth scroll
        $('html, body').animate({
            scrollTop: ($target.offset().top - offsetNum)
        }, 900);

        $('a').removeClass('active');
        $(this).addClass('active');

        console.log('toggled');
    });

    // PARALLAX
    /* //www.youtube.com/watch?v=WTZpNAbz3jg&index=2&list=PLqGj3iMvMa4IyCbhul-PdeiDqmh4ooJzk */
    $(window).scroll(function (){
        // windowScroll holds the current position of where the current scroll is
        var windowScroll = $(this).scrollTop();
        // MIDGROUND = LOGO
        $('.midground').css({
            'transform' : 'translate(0px, '+ windowScroll /2.5 + '%)'
        });
        $('.background').css({
            'transform' : 'translate(0px, '+ windowScroll /1.9 + '%)'
        });
        $('.foreground').css({ 'transform' : 'translate(0px, -'+ windowScroll /14 + '%)'
        });
    });


});  // end of document.ready
