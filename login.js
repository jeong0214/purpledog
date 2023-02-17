const btnModal = document.getElementById("btn-modal");
const conModal = document.getElementById("modal");
const close = document.getElementById("close");
btnModal.addEventListener("click", (e) => {
  conModal.classList.add("on");
});
close.addEventListener("click", (e) => {
  conModal.classList.toggle("on");
});
