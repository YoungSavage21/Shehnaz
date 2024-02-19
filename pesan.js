var ucapanSurat =
  "Hi Shehnaz! Apa kabar? Semoga kamu ga bosen yaa aku tulisin surat kaya begini setiap saat. Aku cuman mau bilang, makasih ya udah menjadi bagian hidup aku. Sama sekali aku ga expect loh bakal ketemu orang kaya kamu pas magang :) Dan aku juga ga expect kalo kita bakalan saling sayang. Maaf ya kalo kadang aku suka banyak minta. Minta video tiktok kamu lah, atau minta pap, minta ceritain ini itu, dan sekarang aku minta liat isi twitter kamu. Shehnaz, kamu sekali-kali juga minta dong sesuatu ke aku, kaya tadi kamu minta bikinin website gini juga gapapa. Biar ga aku mulu yang kebanyakan minta :) Tapi semoga kamu ga marah ya kalo aku mintain terus, soalnya aku seneng banget kalo dikasih video tiktok kamu atau pap kamu. Btw kamu seneng ga sii kalo kita cuddle gitu? Kemarin si aku seneng banget pas kita di bioskop sama di taman. Apalagi pas kepala kita saling nempel, terus kamu elus muka aku walau aku gelian, tapi aku suka banget. Sayangnya waktu terasa berjalan dengan cepat waktu itu, terus kita ga sempet pelukan pas akhir. Semoga kita bisa segera ketemu lagi ya. Makasi ya udah call an setiap malam sama aku, dan kadang juga siang kalo gabut. Makasi udah fast-response, walaupun lu lagi sibuk di rumah. Makasi ya kamu udah mulai bisa nurunin rasa malu kamu dan nunjukin rasa sayang kamu ke aku. Makasiiii! Love you Shehnaz Nazyma Nabilah! Love you so much ❤️";

var isiSurat = document.querySelector(".pesan");

function tampil() {
  setTimeout(typeWriter, 1000);
  setTimeout(function () {
    document.querySelector(".content2").style.display = "block";
    $("body").css("overflow", "hidden");
  }, 400);
}

$("#close").click(function () {
  console.log("test close");
  document.querySelector(".content2").style.display = "";
  $("body").css("overflow", "");
  $("html, body").animate({ scrollTop: $("#scroll").offset().top });
});

var i = 0;
var speed = 10;
isiSurat.value = "";

function typeWriter() {
  if (i < ucapanSurat.length) {
    isiSurat.value += ucapanSurat.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
  }
}
