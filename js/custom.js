$(function(){
    //banner slider
    $('.banner').slick({
     slidesToShow: 1,
     slidesToScroll: 1,
     autoplay:true,
     autoplaySpeed: 1000,
     fade:true,
     speed:1000,
     arrows:true,
     prevArrow:'.start',
     nextArrow:'.end',
   });
   //service slider
 $('.service-main').slick({
     slidesToShow: 4,
     slidesToScroll: 1,
     autoplay: true,
     autoplaySpeed: 1000,
     arrows:false,
     speed:1500,
   });
 });
 //venobox pop up
 $(function(){
   $('.venobox').venobox();
 });
 //counter up
 $(function(){
   $('.counter').counterUp({
     delay: 5,
     time: 1000
 });
 //choose part slider
 $('.choose-item2').slick({
   slidesToShow: 2,
   slidesToScroll: 1,
   autoplay: true,
   autoplaySpeed: 1000,
   arrows:false,
   dots:true,
   vertical:true,
   speed:1500,
 });
 //blog part slider
 $('.blog-main').slick({
   slidesToShow: 2,
   slidesToScroll: 1,
   autoplay:true,
   autoplaySpeed: 1000,
   infinite: true,
   dots:true,
   arrows:false,
   speed:1500,
 });
 //logo part slider
 $('.logo-main').slick({
   slidesToShow: 5,
   slidesToScroll: 1,
   autoplay:true,
   autoplaySpeed: 1000,
   infinite: true,
   arrows:true,
   infinite: true,
   prevArrow:'.left',
   nextArrow:'.right',
   speed:1500,
 });
 
 //back to top
   $('.back-to-top').click(function(){
       $ ('html,body').animate({scrollTop:0},1500);
   });
 
   $(window).scroll(function(){
       var scrolling =$(this).scrollTop();
       if(scrolling > 400){
         $('.back-to-top').fadeIn(500);
       }
       else{
         $('.back-to-top').fadeOut(500);
       }
       if(scrolling > 100){
         $('.nav').addClass('bg');
       }
       else{
         $('.nav').removeClass('bg')
       }
 
   });
   //animation scroll js
   var html_body = $('html, body');
   $('nav a').on('click', function () {
       if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
           var target = $(this.hash);
           target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
           if (target.length) {
               html_body.animate({
                   scrollTop: target.offset().top - 111
               }, 1000);
               return false;
           }
       }
   });
    
 });
 
 $(function(){
     //preloader
     $(window).on('load',function(){
       $('.prreloader').delay(1500).fadeOut(500);
     });
 });
