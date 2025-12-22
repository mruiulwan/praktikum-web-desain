$(document).ready(function () {

  $(".section").hide();
  $("#home").show();

  $(".tabs button").removeClass("active");
  $(".tabs button[data-target='home']").addClass("active");

  $(".tabs button").click(function () {

    let target = $(this).data("target");

    $(".tabs button").removeClass("active");
    $(this).addClass("active");

    $(".section").fadeOut(200);

    setTimeout(function () {
      $("#" + target).fadeIn(500);

      $("html, body").animate({
        scrollTop: $("#" + target).offset().top - 60
      }, 700);
    }, 200);

  });

});
