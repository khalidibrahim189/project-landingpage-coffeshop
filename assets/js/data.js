var toggler = document.getElementById("icon-toggle");
var barr = document.getElementById("bar");
var overlayy = document.getElementById("overlay");
var list = document.getElementById("list");
var close = document.getElementById("icon-close")

//start 
toggler.onclick = function () {
  barr.style.display = "flex"
  overlayy.style.display = "block"
  list.style.display = "flex"
}

close.onclick = function(){
    barr.style.display = "none"
    overlayy.style.display = "none"
    list.style.display = "none"
}