$(document).ready(function(){
    var altura = $('.separacion').offset().top;
    //var container = document.getElementsByClassName("separacion");
    $(window).on('scroll', function(){
        if( $(window).scrollTop() > 40){
            $('.navbar').addClass('sticky-top');
            $('.navbar').removeClass('py-4');
            //container.style.top = 40;


        }else{
            $('.navbar').removeClass('fixed-top');
            $('.navbar').addClass('py-4');
        }
    })

});