/* Allison Shin — portfolio behaviour
   1. scroll reveal   2. plate lightbox   3. current-page nav marker */
(function () {
  "use strict";

  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* --- 1. reveal on scroll ----------------------------------- */
  var targets = document.querySelectorAll("[data-reveal]");
  if (!("IntersectionObserver" in window) || reduced) {
    targets.forEach(function (el) { el.classList.add("is-in"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        e.target.classList.add("is-in");
        io.unobserve(e.target);
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.06 });
    targets.forEach(function (el) { io.observe(el); });
  }

  /* --- 2. lightbox ------------------------------------------- */
  var plates = Array.prototype.slice.call(document.querySelectorAll(".plate"));
  if (plates.length) {
    var box = document.createElement("dialog");
    box.className = "lightbox";
    box.innerHTML =
      '<button class="lightbox__close" type="button" aria-label="Close image">Close &times;</button>' +
      '<img alt="">' +
      '<p class="lightbox__caption"></p>';
    document.body.appendChild(box);

    var boxImg = box.querySelector("img");
    var boxCap = box.querySelector(".lightbox__caption");
    var index = 0;

    function show(i) {
      index = (i + plates.length) % plates.length;
      var src = plates[index].querySelector("img");
      boxImg.src = src.dataset.full || src.src;
      boxImg.alt = src.alt;
      boxCap.textContent =
        src.alt + "  ·  " + (index + 1) + " / " + plates.length + "  ·  ← → to browse";
    }

    plates.forEach(function (btn, i) {
      btn.addEventListener("click", function () {
        show(i);
        if (typeof box.showModal === "function") box.showModal();
        else box.setAttribute("open", "");
      });
    });

    box.querySelector(".lightbox__close").addEventListener("click", function () { box.close(); });
    box.addEventListener("click", function (e) {
      if (e.target === box) box.close();
    });
    box.addEventListener("close", function () {
      if (plates[index]) plates[index].focus();
    });
    document.addEventListener("keydown", function (e) {
      if (!box.open) return;
      if (e.key === "ArrowRight") { e.preventDefault(); show(index + 1); }
      if (e.key === "ArrowLeft")  { e.preventDefault(); show(index - 1); }
    });
  }

  /* --- 3. mark the current page in the nav -------------------- */
  var here = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav a").forEach(function (a) {
    if (a.getAttribute("href") === here) a.setAttribute("aria-current", "page");
  });
})();
