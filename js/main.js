$(function(){
        //=====SKICLY MENU=====//

    var headerPosition = $('.main-nav').offset().top;
    $(window).scroll(function(){
    var scrollValue = $(window).scrollTop();
    if(scrollValue > headerPosition) {
        $('.main-nav').addClass('sticky')
    }
    else{
        $('.main-nav').removeClass('sticky');
    }
    });

    
      //=====bottom to top button=====//

      $(window).scroll(function(){

        var scrolling = $(this).scrollTop();

        if(scrolling > 50){
            $(".bottom-to-top").fadeIn(500);
        }
        else{
            $(".bottom-to-top").fadeOut(500); 
        }
        // sticky menu //
        if(scrolling > 100){
            $("#nav").addClass("sticky-bg");
        }
        else{
            $("#nav").removeClass("sticky-bg");
        }
      });

     $(".bottom-to-top").click(function(){
        $('html, body').animate({
            scrollTop:0
        }, 2000);
     });      
    // PRE LOADER //

    $(window).on("load", function(){
        $("#loading").delay(500) .fadeOut(2000)
    });
    // mixitup
    var mixer = mixitup('.mix-img');
   
    // LIGHTBOX //
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true,
    });


});