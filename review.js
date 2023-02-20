const review_overlay_m = document.getElementById("review_overlay_m");
const btnreview = document.getElementById("btn-review");

btnreview.addEventListener("click", (e) => {
  review_overlay_m.style.display = "flex";
});
review_overlay_m.addEventListener("click", (e) => {
  const evTarget = e.target;
  if (evTarget.classList.contains("review_overlay")) {
    review_overlay_m.style.display = "none";
  }
});
