$(document).ready(function(){
  AOS.init();
  // Sidebar Functions
  $("#open_sidebar").click( function() {
    $("#sidebar-navigation").addClass("open")
  })

  $("#close_sidebar").click( function() {
    $("#sidebar-navigation").removeClass("open")
  })
  // Outside element click trigger
  $("html").click(function (e) {
    if (e.target.id == 'sidebar-navigation' || e.target.id == 'open_sidebar') {
      // Do nothing
    } else {
      $("#sidebar-navigation").removeClass("open")
    }
  })
});