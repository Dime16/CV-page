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
    // var index = 0;
    // var indexMini = 0;
    // var indexLine = 0;
    // var textLine = 0;
    // slider();

    // function slider() {

    //     var slides = document.getElementsByClassName("carousel__box");
    //     var slidesMini = document.getElementsByClassName("carousel__secondary-2");
    //     var lines = document.getElementsByClassName("carousel__text__list__item__1");
    //     var textItem = document.getElementsByClassName("carousel__text__list__item");

    //     // BIG SLIDER
    //     for (i=0; i < slides.length; i++) {
    //         slides[i].style.display = "none";
    //     }
    //     index++;
    //     if(index > slides.length) { index = 1}

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
            if( $(".about__left__img1").isFullyInViewport() ) {
                $(".about__left__img1").addClass("active");
            } else {
                $(".about__left__img1").removeClass("active");
            }

            if( $(".about__left__img2").isFullyInViewport() ) {
                $(".about__left__img2").addClass("active");
            } else {
                $(".about__left__img2").removeClass("active");
            }

            if( $(".about__left__img1").isFullyInViewport() ) {
                $(".about__right__html").addClass("active");
            } else {
                $(".about__right__html").removeClass("active");
            }

            if( $(".about__left__img1").isFullyInViewport() ) {
                $(".about__right__css").addClass("active");
            } else {
                $(".about__right__css").removeClass("active");
            }

            if( $(".about__left__img1").isFullyInViewport() ) {
                $(".about__right__javascript").addClass("active");
            } else {
                $(".about__right__javascript").removeClass("active");
            }

            if( $(".about__left").isFullyInViewport() ) {
                $(".about__left").addClass("active");
            } else {
                $(".about__left").removeClass("active");
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

        });


        //    ----------------------------------------------------------------
            

              $(".carousel").on("init", function (){
                if( $(".home__page__top__box__text").hasClass("active") ) {
                    $(".home__page__top__box__text").removeClass("active");
                } else {
                    $(".home__page__top__box__text").addClass("active");
                }
              });

              $(".carousel").on("beforeChange", function (){
                if( $(".home__page__top__box__text").hasClass("active") ) {
                    $(".home__page__top__box__text").removeClass("active");
                } else {
                    $(".home__page__top__box__text").addClass("active");
                }
              });

              $(".carousel").on("beforeChange", function (){
                if( $(".home__page__left__box__text").hasClass("active") ) {
                    $(".home__page__left__box__text").removeClass("active");
                } else {
                    $(".home__page__left__box__text").addClass("active");
                }
              });
              

            //   ----------- WHAT TO DO WHEN ELEMENT IS IN VIEW ---------------
            

            $(".carousel").on("init", function() {
                $(".home__page__bottom__sudo").addClass("delay4") 
            })

            $(".carousel").on("beforeChange", function() {
           
                if( $(".home__page__bottom__sudo").hasClass("delay4") ) {
                    $(".home__page__bottom__sudo").removeClass("delay4");
                } else  {
                    $(".home__page__bottom__sudo").addClass("delay4");
                }
            })

            $(".carousel").on("init", function() {  
                if( $(".home__page__top__sudo").hasClass("active") ) {
                    $(".home__page__top__sudo").removeClass("active");
                } else  {
                    $(".home__page__top__sudo").addClass("active");
                }
            })

            $(".carousel").on("beforeChange", function() {
                if( $(".home__page__top__sudo").hasClass("active") ) {
                    $(".home__page__top__sudo").removeClass("active");
                } else  {
                    $(".home__page__top__sudo").addClass("active");
                }
            });

// ----------------------------- HORISONTAL --------------------------


            $(".carousel").on("beforeChange", function() {
                if( $(".home__page__left__sudo").hasClass("active") ) {
                    $(".home__page__left__sudo").removeClass("active");
                } else  {
                    $(".home__page__left__sudo").addClass("active");
                }
            });


            $(".carousel").on("beforeChange", function() {
           
                if( $(".home__page__right__sudo").hasClass("active") ) {
                    $(".home__page__right__sudo").removeClass("active");
                } else  {
                    $(".home__page__right__sudo").addClass("active");
                }
            })

 
                $(".home__page__bottom__sudo").each(function () {
                    var random = ((Math.random()) + 6);
                        $(this).css({"transition": `all ${random}s`
                                            
                    });
                })

            $(".home__page__right__sudo").each(function () {
                var random = ((Math.random()) + 4);
                $(this).css({"transition": `all ${random}s`,
                                "transition-delay": "2s"
                });
            })

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


        // ----------------- BUTTON IMAGE CHANGE -------------------
          

        // ------------------------- CAROUSEL ---------------------------



        $('.carousel').slick({
            initialSlide: 0,
            dots: false,
            infinite: true,
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            draggable: false,
            fade: false,
            autoplaySpeed: 8000
        });


});
