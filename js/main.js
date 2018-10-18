function isScrolledIntoView(a) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = a.offset().top;
    var elemBottom = elemTop + a.outerHeight();

    if (elemBottom > docViewTop && elemTop < docViewBottom) {
        a.addClass("active2");
    } else {
        a.removeClass("active2");
    }
};
function isScrolledIntoViewTop(a) {
    var docViewTop = $(window).scrollTop() + 100;
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = a.offset().top;
    var elemBottom = elemTop + a.outerHeight() ;

    if (elemTop < docViewTop) {
        a.addClass("active3");
    } else {
        a.removeClass("active3");
    }
};

$(document).ready(function(){


    // ------------ NAV BAR --------------------
    // var stickyNav = $(".nav").offset().top;
    // console.log(stickyNav);
    // $(window).scroll(function(){
    //     if( $(window).scrollTop() > stickyNav) {
    //         $(".nav").addClass("sticky");
    //         $(".nav__box__item__link").css({"color": "#292929"});
    //         $(".nav__box__svg__logo__pic").attr("src", "/img/svg/logo-full.svg");
    //     } else {
    //         $(".nav").removeClass("sticky");
    //         $(".nav__box__item__link").css({"color": "#fff"});
    //         $(".nav__box__svg__logo__pic").attr("src", "/img/svg/logo-glyph-white.svg");
    //     }
    // });



///  ------------- CHECKBOX MENU ------------------

    // $(".nav__label").on("click", function() {
    //     if ($(".nav__checkbox").prop('checked')) {
    //         $(".nav__box__list").removeClass("active-1");
    //         // $("body").removeClass("color-1");
    //     } else {
         
    //         $(".nav__box__list").addClass("active-1");
    //         // $("body").addClass("color-1");
    //     }
    // });

    // ------------- SLIDER ------------
    var index = 0;
    slider();

    function slider() {

        var slides = document.getElementsByClassName("car__change");
        var letter = document.getElementsByClassName("home__page__container__center__letter");
        var img = document.getElementsByClassName("home__page__picture__box__cover");

        for(j=0; j<letter.length; j++) {
            if(letter[j].classList.contains("active") ) {
                letter[j].classList.remove("active");
            }
        }

        for(z=0; z<img.length; z++) {
            if(img[z].classList.contains("active") ) {
                img[z].classList.remove("active");
            }
        }

        for (i=0; i < slides.length; i++) {
            slides[i].style.display = "none";

        }

        index++;
        if(index > slides.length) { index = 1}
        slides[index-1].style.display = "block"; 
        setTimeout(slider, 5000); // Change image every 2 seconds

            var $letter = $(".home__page__container__center__letter");   
            var delay = 1.5;
            setTimeout(function() {
                $letter.each(function(index, val) {
                    $(val).css({
                        "transition-delay": `${delay}s`
                    });  
                    delay -= .05;
                $(val).addClass("active");

            var random = 1.7 + Math.random();
            var $img = $(".home__page__picture__box__cover")
            $img.addClass("active");
            $img.each(function (index, val) {
                $(val).css({
                    "transition-delay": `${random}s`
                });
            });
                })
            }, 500);

        }

    


//     var slideIndex = 0;
// carousel();

// function carousel() {
//     var i;
//     var x = document.getElementsByClassName("mySlides");
//     for (i = 0; i < x.length; i++) {
//       x[i].style.display = "none"; 
//     }
//     slideIndex++;
//     if (slideIndex > x.length) {slideIndex = 1} 
//     x[slideIndex-1].style.display = "block"; 
//     setTimeout(carousel, 2000); // Change image every 2 seconds
// }
        //   SMALL SLIDER

    

        // LINE LOADER - TEXT

  
    // }

            // ----- IS ELEMENT IN VIEW ----------
 
            $.fn.isFullyInViewport = function() {
                var elementTop = $(this).offset().top;
                var elementBottom = elementTop + $(this).outerHeight();
              
                var viewportTop = $(window).scrollTop();
                var viewportBottom = viewportTop + $(window).height();
                // console.log($(window).height())
                // console.log(elementTop)
                // console.log(elementBottom)
                // console.log(viewportTop)
                // console.log(viewportBottom)

                return elementTop >= viewportTop && elementBottom <= viewportBottom;
              };


           //   ----------- WHAT TO DO WHEN ELEMENT IS IN VIEW ---------------
        $(window).on("resize scroll", function (){

            if( $(".about__right").isFullyInViewport() ) {
                $(".about__right__html").addClass("active");
            } else {
                $(".about__right__html").removeClass("active");
            }

            if( $(".about__right").isFullyInViewport() ) {
                $(".about__right__css").addClass("active");
            } else {
                $(".about__right__css").removeClass("active");
            }

            if( $(".about__right").isFullyInViewport() ) {
                $(".about__right__javascript").addClass("active");
            } else {
                $(".about__right__javascript").removeClass("active");
            }

            if( $(".about__me__box__header").isFullyInViewport() ) {
                $(".about__me__box__header").addClass("active");
            } else {
                $(".about__me__box__header").removeClass("active");
            }

            if( $(".about__me__box__text").isFullyInViewport() ) {
                $(".about__me__box__text").addClass("active");
            } else {
                $(".about__me__box__text").removeClass("active");
            }

            // $(".project__container__box__right").each(function() {
            //     if( $(this).isFullyInViewport() ) {
            //         $(this).addClass("active");
            //     } else {
            //         $(this).removeClass("active");
            //     }     
            // });

            // $(".project__container__box__left").each(function() {
            //     if( $(this).isFullyInViewport() ) {
            //         $(this).addClass("active");
            //     } else {
            //         $(this).removeClass("active");
            //     }     
            // });

   


        });

        //    -------------------------LETTERS and IMAGES --------------------------

        
        // $(".carousel").on("init", function (){
        //     var $letter = $(".home__page__container__center__letter");
        //     console.log('Initilazed');
            
        //     var delay = 1.5;
        //     $letter.each(function(index, val) {
        //         $(val).css({
        //             "transition-delay": `${delay}s`
        //         });
        //         $(val).addClass("active");
        //         delay -= .05;
        //     });

        //     // var random = 2 + Math.random();
        //     var $img = $(".home__page__picture__box__cover")
        //     $img.addClass("active");
        //     $img.each(function (index, val) {
        //         $(val).css({
        //             "transition-delay": `2.5s`
        //         });
        //     });

        //  });



        //  $(".carousel").on("beforeChange", function (event, slick, currentSlide, nextSlide){
        //     console.log('before change');
        //     // console.log($(slick.$slides.get(currentSlide)));

        //     // var $ova = $(slick.$slides.get(currentSlide)).children("div").children("div").children("span").children("div");
        //     // console.log($ova);
        //     // var delay = 1.5;
        //     var $letter = $(".home__page__container__center__letter");
        //     if( $letter.hasClass("active") ) {
        //         $letter.removeClass("active");
        //     } else {
        //         $letter.addClass("active");
        //     }

            // var $letter = $(".home__page__container__center__letter");
            // if( $letter.hasClass("active") ) {
            //     $letter.removeClass("active");
            // } else {
            //     $letter.addClass("active");
            // }

        //     var $img = $(".home__page__picture__box__cover")
        //     if( $img.hasClass("active") ) {
        //            $img.removeClass("active");
        //         } else {
        //            $img.addClass("active");
        //     }

        //     var $letter2 = $(".home__page__container__center__letter-2");
            
        //     var delay = 2;
        //     $letter2.each(function(index, val) {
        //         $(val).css({
        //             "transition-delay": `${delay}s`
        //         });
        //         $(val).addClass("active");
        //         delay -= .05;
        //     });

        //     // var random = 2 + Math.random();
        //     var $img2 = $(".home__page__picture__box__cover-2")
        //     $img2.addClass("active");
        //     $img2.each(function (index, val) {
        //         $(val).css({
        //             "transition-delay": `2.5s`
        //         });
        //     });

        // });

        // $(".carousel").on("afterChange", function (){
        //     var $letter = $(".home__page__container__center__letter");
        //     $letter.addClass("active");
            
        // });

        // $(".carousel").on("init", function (){
        //     var $letter = $(".home__page__container__center__letter-2");
        //     console.log('Initilazed');
            
        //     var delay = 1.5;
        //     $letter.each(function(index, val) {
        //         $(val).css({
        //             "transition-delay": `${delay}s`
        //         });
        //         $(val).addClass("active");
        //         delay -= .05;
        //     });

        //     // var random = 2 + Math.random();
        //     var $img = $(".home__page__picture__box__cover-2")
        //     $img.addClass("active");
        //     $img.each(function (index, val) {
        //         $(val).css({
        //             "transition-delay": `2.5s`
        //         });
        //     });

        //  });




        //  ------------------- 2 -----------------------------

 


      //  ------------ CHANGING THE BACKGROUND IMAGES OF BOXES ------------------



    //    ------------------- PLANETS ON HOVER -----------------

    $(".about__right__html__main").mouseover(function () {
        $(this).siblings(".about__right__html__secondary").addClass("active");
        $(this).siblings(".about__right__css__secondary1").addClass("active");
        $(this).siblings(".about__right__css__secondary2").addClass("active");
        $(this).siblings(".about__right__css__secondary3").addClass("active");
        $(this).siblings(".about__right__javascript__secondary").addClass("active");
    })

    $(".about__right__html__main").mouseleave(function () {
        $(this).siblings(".about__right__html__secondary").removeClass("active");
    })

    $(".about__right__css__main").mouseover(function () {
        $(this).siblings(".about__right__css__secondary1").addClass("active");
        $(this).siblings(".about__right__css__secondary2").addClass("active");
        $(this).siblings(".about__right__css__secondary3").addClass("active");
    })

    $(".about__right__css__main").mouseleave(function () {
        $(this).siblings(".about__right__css__secondary1").removeClass("active");
        $(this).siblings(".about__right__css__secondary2").removeClass("active");
        $(this).siblings(".about__right__css__secondary3").removeClass("active");
    })

    $(".about__right__javascript__main").mouseover(function () {
        $(this).siblings(".about__right__javascript__secondary1").addClass("active");
        $(this).siblings(".about__right__javascript__secondary2").addClass("active");
        $(this).siblings(".about__right__javascript__secondary3").addClass("active");
    })

    $(".about__right__javascript__main").mouseleave(function () {
        $(this).siblings(".about__right__javascript__secondary1").removeClass("active");
        $(this).siblings(".about__right__javascript__secondary2").removeClass("active");
        $(this).siblings(".about__right__javascript__secondary3").removeClass("active");
    })
        //  ------------- IMAGE SCROLL ----------------------

        var $element =  $(".project__container__box__left") ;
        $(window).scroll(function () {

             $element.each(function() {
                    isScrolledIntoView($(this))
                    isScrolledIntoViewTop($(this))

             })
           });



        //  -------------------- HOVER ON PROJECT -----------------------------

        $(".project__container__box__left__reverse").mouseover(function() {
            $(this).children(".project__container__box__left__img__reverse").addClass("active2");
            $(this).children("div").children(".project__container__box__left__text__header__reverse").addClass("active2");
            $(this).children("div").children(".project__container__box__left__text__view__reverse").addClass("active2");
            $(this).children("div").children("p").children(".project__container__box__left__text__span__reverse").addClass("active2");
        });

        $(".project__container__box__left__reverse").mouseleave(function() {
            $(".project__container__box__left__img__reverse").removeClass("active2");
            $(".project__container__box__left__text__header__reverse").removeClass("active2");
            $(".project__container__box__left__text__view__reverse").removeClass("active2");
            $(".project__container__box__left__text__span__reverse").removeClass("active2");
        });

        $(".project__container__box__left").mouseover(function() {

            $(this).children(".project__container__box__left__img").addClass("active");
            $(this).children("div").children(".project__container__box__left__text__header").addClass("active");
            $(this).children("div").children(".project__container__box__left__text__view").addClass("active");
            $(this).children("div").children("p").children(".project__container__box__left__text__span").addClass("active");
        });

        $(".project__container__box__left").mouseleave(function() {
            $(".project__container__box__left__img").removeClass("active");
            $(".project__container__box__left__text__header").removeClass("active");
            $(".project__container__box__left__text__view").removeClass("active");
            $(".project__container__box__left__text__span").removeClass("active");
        });



        $(".project__container__box__right__reverse").mouseover(function() {
            $(this).children(".project__container__box__right__img__reverse").addClass("active2");
            $(this).children("div").children(".project__container__box__right__text__header__reverse").addClass("active2");
            $(this).children("div").children(".project__container__box__right__text__view__reverse").addClass("active2");
            $(this).children("div").children("p").children(".project__container__box__right__text__span__reverse").addClass("active2");
        });

        $(".project__container__box__right__reverse").mouseleave(function() {
            $(".project__container__box__right__img__reverse").removeClass("active2");
            $(".project__container__box__right__text__header__reverse").removeClass("active2");
            $(".project__container__box__right__text__view__reverse").removeClass("active2");
            $(".project__container__box__right__text__span__reverse").removeClass("active2");
        });

        $(".project__container__box__right").mouseover(function() {

            $(this).children(".project__container__box__right__img").addClass("active");
            $(this).children("div").children(".project__container__box__right__text__header").addClass("active");
            $(this).children("div").children(".project__container__box__right__text__view").addClass("active");
            $(this).children("div").children("p").children(".project__container__box__right__text__span").addClass("active");
        });

        $(".project__container__box__right").mouseleave(function() {
            $(".project__container__box__right__img").removeClass("active");
            $(".project__container__box__right__text__header").removeClass("active");
            $(".project__container__box__right__text__view").removeClass("active");
            $(".project__container__box__right__text__span").removeClass("active");
        });



        // ----------------- BUTTON IMAGE CHANGE -------------------
     

        // ------------------------- CAROUSEL ---------------------------



});
