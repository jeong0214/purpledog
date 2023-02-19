const matching = document.getElementById("matching_overlay")
const grade = document.getElementById("bth-grade")
const start = document.getElementById("bth-start")

grade.addEventListener("click" , (e)=>{
  matching.classList.add("on");
});
start.addEventListener("click" , (e) => {
  matching.classList.toggle("on");
});