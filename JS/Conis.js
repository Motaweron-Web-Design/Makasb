$(document).ready(function () {
    $(".navTopLink li .nav-link").click(function () {
        $(this)
          .addClass("active")
          .parent()
          .siblings()
          .find("a")
          .removeClass("active");
      });
    $(".iconHomeNav .iconHome a").click(function () {
        $(this).addClass("active")
        .parent()
        .siblings()
        .find("a")
        .removeClass("active");
    })
    $("body").css({
        paddingTop: $(".navTop").innerHeight(),
        paddingLeft : $(".slideBar").innerWidth(),
    });
    $(window).scroll(function () {
        if ($(window).scrollTop() > 250) {
          $(".fa-angle-up").show();
        } else {
          $(".fa-angle-up").fadeOut();
        }
      });
      $(".fa-angle-up").click(function () {
        scroll({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      });
})