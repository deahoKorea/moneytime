// $(".nav-foot__cont ul li").click(function () {
//   $(this).addClass("active").siblings().removeClass("active");

//   $(this).find("a").addClass("active");
//   $(this).siblings().find("a").removeClass("active");
// });

$(".btn-select-region").click(function () {
  $(".select-region__layer").addClass("active");
});

$(".select-region__list td button").each(function (index) {
  $(this).on({
    click: function () {
      $(".select-region__list td").removeClass("active");
      $(".select-region__list td").eq(index).toggleClass("active");
    },
  });
});
$(".btn-select-region-complete").click(function () {
  $(".select-region__layer").removeClass("active");
});
$(".btn-tab3").click(function () {
  $(".btn-tab3").removeClass("active");
  $(this).toggleClass("active");
});
$(".tab-type3 li:nth-child(1) a").click(function () {
  $(".table-list").removeClass("active");
  $("#fullDetails").addClass("active");
});
$(".tab-type3 li:nth-child(2) a").click(function () {
  $(".table-list").removeClass("active");
  $("#accumulationDetails").addClass("active");
});
$(".tab-type3 li:nth-child(3) a").click(function () {
  $(".table-list").removeClass("active");
  $("#usageDetails").addClass("active");
});
$(".tab-type4 .btn-sorting").click(function () {
  $(".tab-type4 .btn-sorting").removeClass("active");
  $(this).addClass("active");
});

document.getElementById("accordionBtn").addEventListener("click", function () {
  var list = document.querySelector(".board-accordion__list");
  var arrow = document.querySelector(".board-accordion__title img");
  list.classList.toggle("active");
  arrow.classList.toggle("active");
});
