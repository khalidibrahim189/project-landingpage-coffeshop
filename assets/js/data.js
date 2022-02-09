var toggler = document.getElementById("icon-toggle");
var barr = document.getElementById("bar");
var overlayy = document.getElementById("overlay");
var list = document.getElementById("list");
var closer = document.getElementById("icon-close");
var mainn2 = document.getElementById("main2");
var toggler2 = document.getElementById("toggle2");
var iconShop = document.getElementById("icon-shop");

//start 
toggler.onclick = function () {
  barr.style.display = "flex"
  overlayy.style.display = "block"
  list.style.display = "flex"
}

toggler2.onclick = function () {
  mainn2.style.display = "none"
}

iconShop.onclick = function(){
    mainn2.style.display = "block"
}

closer.onclick = function(){
    barr.style.display = "none"
    overlayy.style.display = "none"
    list.style.display = "none"
}