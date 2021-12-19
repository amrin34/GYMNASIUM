$(document).ready(function(){
    'use strict'
    //color switcher js;

    // $('.color-picker .color-btn').on('click',function(){
    //     $('.color-picker').toggleClass('color-pos');  
    // });

    // $('.color-picker ul .default').on('click',function(){
    //     $('body').addClass('default').removeClass('yellow').removeClass('skyblue').removeClass('blue').removeClass('purple');
    // });

    // $('.color-picker ul .yellow').on('click',function(){
    //     $('body').addClass('yellow').removeClass('default').removeClass('skyblue').removeClass('purple').removeClass('blue');
    // });

    // $('.color-picker ul .skyblue').on('click',function(){
    //     $('body').addClass('skyblue').removeClass('default').removeClass('yellow').removeClass('blue').removeClass('purple');
    // });

    // $('.color-picker ul .purple').on('click',function(){
    //     $('body').addClass('purple').removeClass('default').removeClass('skyblue').removeClass('yellow').removeClass('blue');
    // });

    // $('.color-picker ul .blue').on('click',function(){
    //     $('body').addClass('blue').removeClass('default').removeClass('skyblue').removeClass('purple').removeClass('yellow');
    // });


// offcanvas start

    $('.offcanvas ul .default').on('click',function(){
        $('body').addClass('default').removeClass('yellow').removeClass('skyblue').removeClass('blue').removeClass('purple');
    });

    $('.offcanvas ul .yellow').on('click',function(){
        $('body').addClass('yellow').removeClass('default').removeClass('skyblue').removeClass('purple').removeClass('blue');
    });

    $('.offcanvas ul .skyblue').on('click',function(){
        $('body').addClass('skyblue').removeClass('default').removeClass('yellow').removeClass('blue').removeClass('purple');
    });

    $('.offcanvas ul .purple').on('click',function(){
        $('body').addClass('purple').removeClass('default').removeClass('skyblue').removeClass('yellow').removeClass('blue');
    });

    $('.offcanvas ul .blue').on('click',function(){
        $('body').addClass('blue').removeClass('default').removeClass('skyblue').removeClass('purple').removeClass('yellow');
    });

    

    //for banner-slider
    
    $('.banner-slider').slick({
        dots: true,
        arrows: false,
        autoplay: false,
    });

    $('.gallary-slider').slick({
        dots: true,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false ,
    });

    //about video pop up

    $('.venobox').venobox(); 



      //for testimonial-slider
    
        $('.testimonial-slider').slick({
            dots: true,
            arrows: false,
            slidesToShow: 2,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    }
                },
            ]
        });

    //funfact counter
        $('.counter').counterUp();

        // brand slider

        $('.brand-slider').slick({
            arrows: true,
            slidesToShow: 5,
            centerMode: true,
            centerPadding:'0px',
            prevArrow: '<i class="fas fa-chevron-left prev-arrow"></i>',
            nextArrow: '<i class="fas fa-chevron-right next-arrow"></i>',
            
            responsive: [
                            {
                                breakpoint: 992,
                                settings: {
                                slidesToShow: 5,
                                slidesToScroll: 1,
                                infinite: true,
                                
                                }
                            },
                            {
                                breakpoint: 769,
                                settings: {
                                slidesToShow: 3,
                                slidesToScroll: 3,
                                autoplay: true,
                                arrows: false
                            }
                            },
                            {
                                breakpoint: 480,
                                settings: {
                                slidesToShow: 2,
                                slidesToScroll: 1,
                                centerMode:false,
                                }
                            }
                            ]
        });
    });