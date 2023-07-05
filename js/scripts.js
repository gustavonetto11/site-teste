$('.navTrigger').click(function () {
  $(this).toggleClass('active');
  console.log("Clicked menu");
  $("#mainListDiv").toggleClass("show_list");
  $("#mainListDiv").fadeIn();
});

$("#mainListDiv li").click(function() {
  $("#mainListDiv").removeClass("show_list");
});
