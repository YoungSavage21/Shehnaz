const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

var timeout;

hover("logo");
hover("image");

var kabar = [
  "Yayy Shehnaz lagi happy nii",
  "Kenapa tuh senyum-senyum",
  "Jutek amat dah kak 🙄",
  "Kalo lagi sedih cerita yaa",
  "Jangan nangis nanti aku ikutan nangis 😭",
  "Kamu marah sama aku yaa 😔",
  "Kebanyakan makan pedes sii, gws!",
];
var audio = new Audio("click.mp3");
var music = document.getElementById("music");
music.volume = 0.3;
$("button").click(function () {
  audio.play();
});

// STARTING PART

$("#hi").click(function (e) {
  $("#welcome").text("Asik disapa balik 😚");

  music.play();
  clearTimeout(timeout);
  timeout = setTimeout(function () {
    $("html, body").animate({ scrollTop: $("#kabar-sect").offset().top });
    $("#welcome").text("Hi Shehnaz!");
  }, 1500);
});
$("#bye").click(function (e) {
  $("#welcome").text("Yaudah sana hus hus 😒");

  clearTimeout(timeout);
  timeout = setTimeout(function () {
    window.close();
  }, 1500);
});

// EMOJI PART

$(".emoji").click(function (e) {
  var attr = $(this).attr("id");
  var index = attr.slice(1);
  audio.play();

  $("#kabar").text(kabar[index]);
  $(".emoji").each(function () {
    if ($(this).attr("id") !== attr) {
      $(this).removeClass("show");
    }
  });

  clearTimeout(timeout);
  timeout = setTimeout(function () {
    $("html, body").animate({ scrollTop: $("#logos-sect").offset().top });
    $("#kabar").text("Apa Kabar?");
  }, 2000);
});

// LOGO PART

var count = 0;

$("#l1").click(function () {
  if (count === 0) {
    $("#logos").text("Masa ga ingat, coba ingat-ingat lagi...");
    $(this).text("Tetap ga ingat");
    count++;
  } else if (count === 1) {
    $("#logos").text("Seriusan ga ingat?");
    $(this).text("Serius");
    count++;
  } else if (count === 2) {
    $("#logos").text("Ahh coba pikirin dulu...");
    $(this).removeClass("btn-outline-warning");
    $(this).addClass("btn-outline-danger");
    $(this).text("GA INGATTT");
    count++;
  } else if (count === 3) {
    $("#logos").text("Semoga kepalanya kejedot biar ingat 😊");
    var btn = $(this);
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      $("html, body").animate({ scrollTop: $("#images-sect").offset().top });
      $("#logos").text("Ingat ini gaa?");
      btn.addClass("btn-outline-warning");
      btn.removeClass("btn-outline-danger");
      btn.text("Gaaa");
      count = 0;
    }, 2000);
  }
});

$("#l0").click(function () {
  console.log(timeout);
  $("#logos").text("Pasti ingat dong, masa ga");
  clearTimeout(timeout);
  timeout = setTimeout(function () {
    $("html, body").animate({ scrollTop: $("#images-sect").offset().top });
    $("#logos").text("Ingat ini gaa?");
  }, 2000);
});

// IMAGES PART

$("#i0").click(function () {
  $("#images").text("Lucu kannn 😋");
  $(".image").each(function () {
    $(this).addClass("none");
  });
  $(".lovely").removeClass("none");
  $("#i0").addClass("none");
  $("#i1").addClass("none");
  return_image(this);
});

$("#i1").click(function () {
  $("#images").text("LUCU GAAA?");

  $(".image").each(function () {
    $(this).addClass("none");
  });
  $(".stressed").removeClass("none");
  $("#i0").addClass("none");
  $("#i1").addClass("none");
  $("#i2").removeClass("none");
});

$("#i2").click(function () {
  $("#images").text("Nah gitu dong 😘");

  $(".stressed").addClass("none");
  $(".lovely").removeClass("none");
  $("#i2").addClass("none");
  return_image(this);
});

function return_image() {
  $("html, body").animate(
    { scrollTop: $("#questions-sect").offset().top },
    2000
  );
  clearTimeout(timeout);
  timeout = setTimeout(function () {
    $("#images").text("Lucu ya kita?");
    $("#i0").removeClass("none");
    $("#i1").removeClass("none");
    $(".image").each(function () {
      $(this).removeClass("none");
    });
    $(".lovely").addClass("none");
  }, 2000);
}

//QUESTION PART

$("#q0").click(function () {
  var t = $(this);
  $("#questions").text("Sama aku juga kangen!!!");
  $(".crying").toggleClass("none");
  t.closest("div").addClass("none");
  clearTimeout(timeout);
  timeout = setTimeout(function () {
    $("html, body").animate({ scrollTop: $("#messages-sect").offset().top });
    $("#questions").text("Kamu Kangen Aku Ga?");
    $(".crying").toggleClass("none");
    t.closest("div").removeClass("none");
  }, 2500);
});

$("#q1").click(function () {
  var t = $(this);
  $("#questions").text("Cape ahh, ngeselinn!");
  $(".pissed").toggleClass("none");
  t.closest("div").addClass("none");
  clearTimeout(timeout);
  timeout = setTimeout(function () {
    $("html, body").animate({ scrollTop: $("#messages-sect").offset().top });
    $("#questions").text("Kamu Kangen Aku Ga?");
    $(".pissed").toggleClass("none");
    t.closest("div").removeClass("none");
  }, 2500);
});

function hover(clas, scale) {
  var rotate;

  $("." + clas).hover(
    function () {
      var current = $(this);
      rotate = $(this).css("rotate");

      $("." + clas).each(function () {
        $(this).css("transition-delay", "0s");

        if ($(this).is(current)) {
          $(this).css({
            opacity: 1,
            transition: "all 0.5s",
            rotate: "0deg",
          });
        } else {
          $(this).css({
            opacity: 0.015,
          });
        }
      });
    },
    function () {
      $(this).css("rotate", rotate);
      $("." + clas).css({
        opacity: 1,
      });
    }
  );
}
