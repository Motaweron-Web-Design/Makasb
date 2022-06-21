$(document).ready(function () {
    $(".navTopLink li a").click(function () {
        $(this).addClass("active").parent().siblings().find("a").removeClass("active")
        $("body , html").animate({
            scrollTop: $("#" + $(this).data("scroll")).offset().top -200
         } , 100)
    })
    $(".linkSocial ul li").on("click" , function () {
        $(this).addClass("active").siblings().removeClass("active")
        $("#" + $(this).data("show")).fadeIn(500).siblings().hide()
    })
    $(window).scroll(function () {
        if ($(window).scrollTop() > 250) {
          $(".fa-angle-up").show()
        } else {
          $(".fa-angle-up").fadeOut()
        }
      })
      $(".fa-angle-up").click(function () {
        scroll({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      })
      $("body").css("paddingTop" , $("header .nav2").innerHeight())
      $(window).scroll(function () {
        if ($(window).scrollTop() >= 66) {
            $("header .nav2").addClass("active")
            $(".LogoNav2").addClass("active")
        } else {
            $("header .nav2").removeClass("active")
            $(".LogoNav2").removeClass("active")
        }
      })
      $(window).on("load" , function () {
        $("#email").focus()
      })

})