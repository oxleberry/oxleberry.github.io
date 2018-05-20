

// • Add functionality for testamonials to rotate


$(function(){

    $('.carousel').slick();

    // $('.carousel').slick({
    //   infinite: true,
    //   slidesToShow: 3,
    //   slidesToScroll: 1
    // });

    // SMOOTH SCROLLING
    // https://stackoverflow.com/questions/31832227/jquery-smooth-scrolling-anchor-navigation
    $('header a').on('click', function(e) {
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
    });

    /* //www.youtube.com/watch?v=WTZpNAbz3jg&index=2&list=PLqGj3iMvMa4IyCbhul-PdeiDqmh4ooJzk */
    // PARALLAX
    $(window).scroll(function (){
        // windowScroll holds the current position of where the current scroll is
        var windowScroll = $(this).scrollTop();
        console.log(windowScroll);

        // $('.bg-box').css({
        //     'transform' : 'translate(0px, -'+ windowScroll /50 + '%)'
        // });
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
