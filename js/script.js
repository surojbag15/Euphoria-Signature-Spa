document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("hamburger-btn");
  const offcanvas = document.getElementById("navbarSupportedContent");

  offcanvas.addEventListener("show.bs.offcanvas", function () {
    btn.classList.add("open");
  });


  offcanvas.addEventListener("hide.bs.offcanvas", function () {
    btn.classList.remove("open");
  });
});

