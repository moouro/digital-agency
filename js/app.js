function toggle() {
var x = document.getElementById("navigation");

if (x.className  === "navigation"){
  x.className += " menujs";
  document.getElementById("icon-menu").innerHTML = "&#x2715"

}else {
  x.className = "navigation";
  document.getElementById("icon-menu").innerHTML = "&#9776;"
}

}