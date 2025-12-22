$(document).ready(function () {

  $(".panel").hide();
  $("#it").show();

  $(".tab").click(function () {
    $(".tab").removeClass("active");
    $(this).addClass("active");

    var target = $(this).data("target");
    $(".panel").slideUp(300);
    $(target).slideDown(300);
  });

  $("#alumniForm").submit(function (e) {
    e.preventDefault();

    var nama = $("#nama").val();
    var tahun = $("#tahun").val();
    var bidang = $("#bidang").val();
    var pekerjaan = $("#pekerjaan").val();

    var row = "<tr><td>" + nama + "</td><td>" + tahun + "</td><td>" + pekerjaan + "</td></tr>";

    $("#" + bidang + " tbody").append(row);

    $("#alumniForm")[0].reset();
  });

});
