$(document).ready(function () {
  AOS.init({
    once: true,
  });
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
    if ($(this).scrollTop() > 100) {
      $(".header-navigation").addClass("scrolled");
    } else {
      $(".header-navigation").removeClass("scrolled");
    }
    var position = $(this).scrollTop() + 250;
    $(".section-scroll").each(function () {
      var target = $(this).offset().top;
      var id = $(this).attr("id");
      if (position >= target) {
        $(".header-menu-list > li > a").removeClass("active");
        $(".header-menu-list > li > a[href=\\#" + id + "]").addClass("active");
      }
    });

    /* Impact at a glance */

    if ($("#odometer1").visible(true)) {
      $("#odometer1").addClass("odometer");
      odometer1.innerHTML = "50000";
    }
    if ($("#odometer2").visible(true)) {
      $("#odometer2").addClass("odometer");
      odometer2.innerHTML = "500000";
    }
    if ($("#odometer4").visible(true)) {
      $("#odometer4").addClass("odometer");
      odometer4.innerHTML = "5";
    }
    if ($("#odometer5").visible(true)) {
      $("#odometer5").addClass("odometer");
      odometer5.innerHTML = "200";
    }
    if ($("#odometer6").visible(true)) {
      $("#odometer6").addClass("odometer");
      odometer6.innerHTML = "18.6";
    }
    /* end */

    /* Empowering */

    if ($("#odometer7").visible(true)) {
      $("#odometer7").addClass("odometer");
      odometer7.innerHTML = "7000";
    }
    if ($("#odometer8").visible(true)) {
      $("#odometer8").addClass("odometer");
      odometer8.innerHTML = "13000";
    }
    if ($("#odometer9").visible(true)) {
      $("#odometer9").addClass("odometer");
      odometer9.innerHTML = "210000";
    }
    if ($("#odometer10").visible(true)) {
      $("#odometer10").addClass("odometer");
      odometer10.innerHTML = "8200";
    }
    if ($("#odometer11").visible(true)) {
      $("#odometer11").addClass("odometer");
      odometer11.innerHTML = "245000";
    }
    /* end */

    /* Research */

    if ($("#odometer15").visible(true)) {
      $("#odometer15").addClass("odometer");
      odometer15.innerHTML = "600000";
    }
    if ($("#odometer16").visible(true)) {
      $("#odometer16").addClass("odometer");
      odometer16.innerHTML = "20000";
    }
    if ($("#odometer17").visible(true)) {
      $("#odometer17").addClass("odometer");
      odometer17.innerHTML = "3000";
    }
    /* end */
  });
});
