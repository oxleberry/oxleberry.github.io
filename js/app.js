

// • Add functionality for projects to live update to portfolio
// • Add functionality for testamonials to rotate


// var projectTiles = [];
// var projectDetail = [{
//     title: 'Project #1',
//     img: 'images/oxle_0.png',
//     description: 'Project Description',
//     skills: ['html', 'css','js']
// }
// ];



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



    console.log('test');


});  // end of document.ready
