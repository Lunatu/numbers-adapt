$(function() {
    $( '.features-tabs' ).tabs();

    $('#owl-one').owlCarousel({
        loop:true,
        nav:true,
        pagination:true,
        dots:false,
        items:1
    })

    $('#owl-two').owlCarousel({
        loop:true,
        center:true,
        nav:true,
        pagination:true,
        dots:false,
        items:3,
        responsiveClass:true,
        responsive:{
          375:{
            items:1
          },
          1200:{
            items:3
          },
          1400:{
            items:3
          }
        }
                          
    })

     function mobMenu() {
       let nav = $('.menu');
    
       $('.menu-btn').click(function() {
         if(nav.hasClass('active')) {
           nav.removeClass('active');
         }
         else {
           nav.addClass('active');
         }
       });
    
     }
     mobMenu();
    
   

  });
function set_owl_center() {
  owl.find( '.active' ).removeClass('.center');
  setTimeout(function(){
    owl.find( '.active' ).each(function( i ) {
      if(i==3) $(this).addClass('.center');
    });
  }, 80);
}
set_owl_center(); 
owl.on('changed.owl.carousel', function(event) {set_owl_center();})




