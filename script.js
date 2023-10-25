window.onscroll = function() {scrollFunction(), scrollFunction2()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.height = "30px";
  } else {
    document.getElementById("header").style.height = "75px";
  }
}
