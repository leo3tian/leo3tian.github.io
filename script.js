window.onscroll = function() {scrollFunction(), scrollFunction2()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.height = "30px";
    document.getElementById("header").style.backgroundColor = "rgb(50, 150, 50)";
  } else {
    document.getElementById("header").style.height = "75px";
    document.getElementById("header").style.backgroundColor = "rgb(80, 180, 80)";
  }
}
