document.addEventListener("contextmenu", function (e) {
  if (e.target.tagName === "IMG") e.preventDefault();
});
document.querySelectorAll("img").forEach(function (img) {
  img.setAttribute("draggable", "false");
});
