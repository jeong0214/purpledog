const review_overlay_m = document.getElementById("review_overlay_m");
function review_overlay_mOn() {
  review_overlay_m.style.display = "flex";
}
function review_overlay_mOff() {
  review_overlay_m.style.display = "none";
}
// const btnreview = document.getElementById("btn-review");
const btnreview = document.querySelector("#btn-review");
const conreview_overlay_m = document.getElementById("review_overlay_m");

btnreview.addEventListener("click", () => {
  conreview_overlay_m.classList.add("on");
});
// btnreview.addEventListener("click", (e) => {
//   console.log("클릭");
//   conreview_overlay_m.classList.add("on");
// });
conreview_overlay_m.addEventListener("click", (e) => {
  conreview_overlay_m.classList.toggle("on");
});
