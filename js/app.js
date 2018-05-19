

// • Add functionality for projects to live update to portfolio
// • Add functionality for testamonials to rotate

// generates from project list .js.



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
            offsetNum = 0;
        }
        // smooth scroll
        $('html, body').animate({
            scrollTop: ($target.offset().top - offsetNum)
        }, 900);
    });


    // $('#project-tiles div').eq(0).on('mouseenter', function (){
    //     // var bg = $(this).css('background-image');
    //     // bg = bg.replace('url(','').replace(')','').replace(/\"/gi, "");
    //     // $('.detail-container').clear();
    //
    //     var title = projectDetails[0].title;
    //     var imgEl = projectDetails[0].imgDetail;
    //     var description = projectDetails[0].description;
    //     var skills = projectDetails[0].skills;
    //     // console.log(skills);
    //     $(skills).each(function (idx){
    //         $('.detail-container ul').append(`<li>${skills[idx]}</li>`);
    //
    //     });
    //
    //     $('.detail-container h3').text(title);
    //     // $('.detail-img').css('background-image', 'url(images/monument-img1.png)');
    //     $('.detail-img').css('background-image', `url(${imgEl})`);
    //     $('.detail-container p').text(description);
    //
    // });




});  // end of document.ready
