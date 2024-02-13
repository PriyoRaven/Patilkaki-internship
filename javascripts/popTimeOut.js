document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    var bground = document.getElementById("hidden");
    bground.style.display = "block";
  }, 1000);

  setTimeout(function () {
    var div = document.querySelector(".popcontainer");
    div.style.marginTop = "40vh";
    div.style.transform = "translateY(-50%)";
  }, 1050);
});

function closing() {
  var div = document.querySelector(".popcontainer");
  div.style.transition =
    "margin-top 0.3s ease-in-out, transform 0.3s ease-in-out";
  div.style.marginTop = "50vh";
  div.style.transform = "translateY(100%)";

  setTimeout(function () {
    var bground = document.getElementById("hidden");
    bground.style.display = "none";
  }, 300);
}
