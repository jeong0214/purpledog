const gnb_m = document.getElementById("gnb_m");
const btn_gnb_m = document.getElementById("btn_gnb_m");
const push_bar = document.getElementById("push_bar");

btn_gnb_m.addEventListener("click", (e) => {
  gnb_m.classList.add("on");
});
push_bar.addEventListener("click", (e) => {
  gnb_m.classList.toggle("on");
});
