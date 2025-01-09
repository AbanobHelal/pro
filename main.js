let stars = document.getElementById("ster");
let moon = document.getElementById("moon");
let mountains3 = document.getElementById("mountains3");
let mountains4 = document.getElementById("mountains4");
let river = document.getElementById("river");
let boat = document.getElementById("boat");
let pop = document.querySelector(".pop");
let lastScrollY = 0;

const onScroll = () => {
  let value = lastScrollY;

  stars.style.left = value + "px";
  moon.style.top = value * 3 + "px";
  mountains3.style.top = value * 1.5 + "px";
  mountains4.style.top = value + "px";
  river.style.top = value + "px";
  boat.style.top = value + "px";
  boat.style.left = value * 4 + "px";
  pop.style.fontSize = Math.min(value, 67) + "px";
  pop.style.position = value >= 67 ? "fixed" : "relative";

  pop.style.display = value >= 429 ? "none" : "block";

  document.querySelector(".main").style.background =
    value >= 127
      ? "linear-gradient(#376281, #10001f)"
      : "linear-gradient(#200016, #10001f)";
};

window.addEventListener("scroll", () => {
  lastScrollY = window.scrollY;
  requestAnimationFrame(onScroll);
});

