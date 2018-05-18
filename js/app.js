

// • Tweak carousel of project images
// • Add functionality for projects to live update to portfolio
// • Add functionality for testamonials to rotate
// • Add smooth scrolling to sections


// document.addEventListener('DOMContentLoaded', function() {
//   var elems = document.querySelectorAll('.carousel');
//   var instances = M.Carousel.init(elems, options);
// });


// var projectTiles = [];
// var projectDetail = [{
//     title: 'Project #1',
//     img: 'images/oxle_0.png',
//     description: 'Project Description',
//     skills: ['html', 'css','js']
// }
// ];



$(function(){
    console.log('test');
    // $('.carousel').carousel();

    $('.carousel').slick();

// $('.carousel').slick({
//   infinite: true,
//   slidesToShow: 3,
//   slidesToScroll: 1
// });

});  // end of document.ready
