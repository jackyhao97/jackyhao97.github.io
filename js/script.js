$(".page-scroll").on("click", function (e) {
  let tujuan = $(this).attr("href");
  let elemenTujuan = $(tujuan);
  console.log(elemenTujuan.offset().top);
  $("html").animate(
    {
      scrollTop: elemenTujuan.offset().top - 50,
    },
    "2000",
    "easeInOutExpo"
  );
  e.preventDefault();
  $("#bs-example-navbar-collapse-1").addClass("in");
  $(".collapse").css("display", "none");
});

// about
$(window).on("load", function () {
  $(".pKiri").addClass("pMuncul");
  $(".pKanan").addClass("pMuncul");
});
// akhir about

$(window).scroll(function () {
  let wScroll = $(this).scrollTop();

  // jumbotron
  $(".jumbotron img").css({
    transform: "translate(0px, " + wScroll / 4 + "%)",
  });

  $(".jumbotron h1").css({
    transform: "translate(0px, " + wScroll / 2 + "%)",
  });

  $(".jumbotron p").css({
    transform: "translate(0px, " + wScroll / 1.2 + "%)",
  });
  // akhir jumbotron

  // portfolio
  if (wScroll > $(".portfolio").offset().top - 250) {
    $(".portfolio .group").each(function (i) {
      setTimeout(function () {
        $(".portfolio .group").eq(i).addClass("muncul");
      }, 300 * i);
    });
  }
  // akhir portfolio
});
