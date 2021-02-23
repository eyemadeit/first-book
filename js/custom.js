$(document).ready(function () {
  AOS.init();
  // Sidebar Functions
  $("#open_sidebar").click(function () {
    $("#sidebar-navigation").addClass("open");
  });

  $("#close_sidebar").click(function () {
    $("#sidebar-navigation").removeClass("open");
  });
  // Outside element click trigger
  $("html").click(function (e) {
    if (e.target.id == "sidebar-navigation" || e.target.id == "open_sidebar") {
      // Do nothing
    } else {
      $("#sidebar-navigation").removeClass("open");
    }
  });

  $("#read-more").click(function () {
    var text = $(this).html();
    if (text === "READ MORE") {
      $(this).html("READ LESS");
    } else {
      $(this).html("READ MORE");
    }
    $("#more-content").toggleClass("more");
  });

  $(".switch").click(function () {
    $("#relative").toggleClass("clicked");
  });

  $(document).on("scroll", function () {
    /* Add class to navigation on currently scrolled section */
    var position = $(this).scrollTop() + 250;
    $(".section-scroll").each(function () {
      var target = $(this).offset().top;
      var id = $(this).attr("id");
      if (position >= target) {
        $(".header-menu-list > li > a").removeClass("active");
        $(".header-menu-list > li > a[href=\\#" + id + "]").addClass("active");
      }
    });

    // if ($("#donate").visible(true)) {
    //   $(".header-menu-list > li > a[href=\\#action]").addClass("active");
    // } else {
    //   $(".header-menu-list > li > a[href=\\#action]").removeClass("active");
    // }

    /* end */

    /* Add Custom parallax effect on image */
    var start = $("#parallax").position().top;
    var end = $("#tools").position().top;

    const target = document.querySelectorAll(".scroll-item");

    var index = 0,
      length = target.length;
    if (
      $(this).scrollTop() >= start &&
      $(this).scrollTop() <= end - end * 0.1
    ) {
      for (index; index < length; index++) {
        var pos = (window.pageYOffset - start) * target[index].dataset.rate;

        if (target[index].dataset.direction === "vertical") {
          target[index].style.transform = "translate3d(0px," + pos + "px, 0px)";
        } else {
          var posX = (window.pageYOffset - start) * target[index].dataset.ratex;
          var posY = (window.pageYOffset - start) * target[index].dataset.ratey;

          target[index].style.transform =
            "translate3d(" + posX + "px, " + posY + "px, 0px)";
        }
      }
    }
    /* end */
  });
});
