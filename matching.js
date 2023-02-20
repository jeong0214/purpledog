<<<<<<< HEAD
const matching = document.getElementById("matching_overlay");
const grade = document.querySelectorAll(".grade");
const start = document.getElementById("btn-start");
const next = document.getElementById("btn-next");
const next1 = document.getElementById("btn-next2");
const step1_modal = document.getElementById("step1_modal");
const step2_modal = document.getElementById("step2_modal");



grade.forEach(function (item, i, test) {
  item.addEventListener("click", function () {
    matching.style.display = "flex";
  });
});

console.log(grade);

matching.addEventListener("click", (e) => {
  const evTarget = e.target;
  if (evTarget.classList.contains("matching_frame")) {
    matching.style.display = "none";
  }
});

start.addEventListener("click", (e) => {
  step1_modal.classList.add("on");
  matching.style.display = "none";
});

next.addEventListener("click", (e) => {
  step2_modal.classList.add("on");
  step1_modal.classList.toggle("on");
});

next1.addEventListener("click", (e) => {
  step2_modal.classList.toggle("on");
=======
const matching = document.getElementById("matching_overlay")
const grade = document.getElementById("bth-grade")
const start = document.getElementById("bth-start")

grade.addEventListener("click" , (e)=>{
  matching.classList.add("on");
});
start.addEventListener("click" , (e) => {
  matching.classList.toggle("on");
>>>>>>> a40cdcdf4104c57c327b1117ddff712dd1079ad8
});