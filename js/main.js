function isScrolledIntoView(a) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height() - 100;
    var elemTop = a.offset().top;
    var elemBottom = elemTop + a.outerHeight();

    if (elemBottom > docViewTop && elemTop < docViewBottom) {
        a.addClass("active");
    } else {
        a.removeClass("active");
    }
};
function isScrolledIntoViewTop(a) {
    var docViewTop = $(window).scrollTop() -100;
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = a.offset().top;
    var elemBottom = elemTop + a.outerHeight() ;

    if (elemTop < docViewTop) {
        a.addClass("active2");
    } else {
        a.removeClass("active2");
    }
};

function isPatialyIntoView(a) {
    var docViewTop = $(window).scrollTop() - a.innerHeight() + 100;
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = a.offset().top;
    var elemBottom = elemTop + a.outerHeight();

    if (elemTop >= docViewTop && elemTop <= docViewBottom) {
       return true;
    } else {
        return false;
    }
};


  
$(document).ready(function(){

    // ------------ NAV BAR --------------------

    var colorNav = $(".nav").outerHeight();
    $nav = $(".nav");
    // console.log(colorNav , $(window).scrollTop(), $(window).height());
    $(window).scroll(function(){
        if( $(window).scrollTop() > $(window).height()) {
            $nav.addClass("active");
        } else {
            $nav.removeClass("active");
        }
    });



///  ------------- CHECKBOX MENU ------------------
    var $checkbox = $(".nav__checkbox");
    var $button = $(".nav__button");



    $button.on("click", function() {
        if ( $checkbox.prop('checked') ) {
            $(".horisontal__box__cover").removeClass("active");
            $(".vertical").removeClass("active");
            $(".nav__button__text").html("Menu");
            $(".horisontal__box__list").removeClass("active")

            $(".horisontal__box__list__item").each(function(index, val) {
                $(val).removeClass("active");
                $(val).css({
                    "transition-delay": ".001s",
                    "transition": "all .001s"
                })

            })
            
        } else {
            $(".horisontal__box__cover").addClass("active");
            $(".vertical").addClass("active");
            $(".nav__button__text").html("Close")
            $(".horisontal__box__list").addClass("active")
            var counter = .4;
            $(".horisontal__box__list__item").each(function(index, val) {
                $(val).addClass("active");
                $(val).css({
                    "transition": "all .3s",
                    "transition-delay": `${counter}s`
                })
                counter += .4
            })
        }
    });

    $(".horisontal__box__list__link").on("click", function() {
        $checkbox.prop("checked",false).trigger("change");
        $(".horisontal__box__cover").removeClass("active");
        $(".vertical").removeClass("active");
        $(".nav__button__text").html("Menu");
        $(".horisontal__box__list").removeClass("active")
        $(".horisontal__box__list__item").removeClass("active");

    }); 


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


            if( $(".about__me__box__header").isFullyInViewport() ) {
                $(".about__me__box__header").addClass("active");
                $(".about__me__box__text").addClass("active");
                $(".about__me__box").addClass("active");
                $(".about__me").addClass("active");
            } else {
                $(".about__me__box").removeClass("active");
            }

            // if( $(".about__me__box__text").isFullyInViewport() ) {
            //     $(".about__me__box__text").addClass("active");
            // } else {
            //     $(".about__me__box__text").removeClass("active");
            // }


        });

        var $element =  $(".project__container__box__left") ;
        $(window).scroll(function () {
             $element.each(function() {
                    isScrolledIntoView($(this))
                    isScrolledIntoViewTop($(this))
             })
        });

        var $element2 =  $(".project__container__box__right") ;
        $(window).scroll(function () {
            $element2.each(function() {
                    isScrolledIntoView($(this))
                    isScrolledIntoViewTop($(this))
            })
        });

        var $element3 =  $(".about__s") ;
        $(window).scroll(function () {
            $element3.each(function() {
                   if( isPatialyIntoView($(this).children('div').parent('div'))) {

                       $(this).children('div').children('.about__s__box__line').addClass('active');
                       $(this).children('div').children('div').children('div').children('div').children('.about__s__box__bottom__right__cover').addClass('active');
                      var $line = $(this).children('div').children('div').children('div').children('div').children('.about__s__box__bottom__left__span');

                      var delay = 0;
                      setTimeout(function() {
                          $line.each(function(index, val) {
                              $(val).css({
                                  "transition-delay": `${delay}s`
                              });  
                              delay += .3;
                          $(val).addClass("active");
                          })
                      }, 500);

                    var $star =  $(this).children('div').children('div').children('div').children('div').children('.about__s__box__bottom__bot__icon');
                    var $limit =  $(this).children('.about__s__num').html();
                      var delay = 0;
                      var counter = 0;
                      var wait = .7;
                      setTimeout(function() {
                        $star.each(function(index, val) {
                            $(val).css({
                                "transition-delay": `${delay}s`
                            });  
                            delay += .15;
                        $(val).addClass("active");
                        counter++
                        if(counter <= $limit){
                            $(val).addClass("active1");
                        }
                        })
                    }, 500);        
                }
            })
        });


        //  ------------------- test -----------------------------

    $(".project__container__box__left").on("click", function(){
        var $top =  $(this).siblings(".project__container__box__top");
        var $bot =  $(this).siblings(".project__container__box__bot");
        var $mid =  $(this).siblings(".project__container__box__mid");
        var $html = $('html');
        var $modal = $(this).siblings(".modal");
        $(this).siblings(".project__container__box__top").addClass("active");
        $(this).siblings(".project__container__box__bot").addClass("active");
        $html.css({"overflow": "hidden"})

        setTimeout(function() {
            $mid.addClass("active");
            $modal.addClass("active");
        }, 1400);

        setTimeout(function() {
            $top.addClass("active2");
            $bot.addClass("active2");
            $mid.css({"display": "none"})
            $mid.removeClass("active")
 
        }, 2900);

        setTimeout(function() {
            $top.css({"display": "none"})
            $bot.css({"display": "none"})
            $top.removeClass("active");
            $bot.removeClass("active");
            $top.removeClass("active2");
            $bot.removeClass("active2");
        }, 4200)
        setTimeout(function() {
            $top.css({"display": "block"})
            $bot.css({"display": "block"})
            $mid.css({"display": "block"})
        }, 4300);

    });

    $(".project__container__box__right").on("click", function(){
        var $top =  $(this).siblings(".project__container__box__top");
        var $bot =  $(this).siblings(".project__container__box__bot");
        var $mid =  $(this).siblings(".project__container__box__mid");
        var $html = $('html');
        var $modal = $(this).siblings(".modal");

        $(this).siblings(".project__container__box__top").addClass("active");
        $(this).siblings(".project__container__box__bot").addClass("active");
        $html.css({"overflow": "hidden"})
        setTimeout(function() {
            $mid.addClass("active");
            $modal.addClass("active");
        }, 1300);

        setTimeout(function() {
            $top.addClass("active2");
            $bot.addClass("active2");
            $mid.css({"display": "none"})
            $mid.removeClass("active")
        }, 2800);

        setTimeout(function() {
            $top.css({"display": "none"})
            $bot.css({"display": "none"})
            $top.removeClass("active");
            $bot.removeClass("active");
            $top.removeClass("active2");
            $bot.removeClass("active2");
        }, 4100)
        setTimeout(function() {
            $top.css({"display": "block"})
            $bot.css({"display": "block"})
            $mid.css({"display": "block"})
        }, 4200);

    });

    $(".modal__box__front__top__home").on("click", function(){
        var $top = $(".project__container__box__top");
        var $bot = $(".project__container__box__bot");
        var $mid = $(".project__container__box__mid");
        var $html = $('html');
        $($top).addClass("active");
        $($bot).addClass("active");

        setTimeout(function() {
            $mid.addClass("active");
            
        }, 1300);

        setTimeout(function() {
            $top.addClass("active2");
            $bot.addClass("active2");
            $mid.css({"display": "none"})
            $mid.removeClass("active")
            $(".modal").removeClass("active");
        }, 2800);

        setTimeout(function() {
            $top.css({"display": "none"})
            $bot.css({"display": "none"})
            $top.removeClass("active");
            $bot.removeClass("active");
            $top.removeClass("active2");
            $bot.removeClass("active2");
            $html.css({"overflow": "scroll"})
        }, 4100)
        setTimeout(function() {
            $top.css({"display": "block"})
            $bot.css({"display": "block"})
            $mid.css({"display": "block"})
            
        }, 4200);
        
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


});
