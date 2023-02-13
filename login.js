const modal = document.getElementById("modal");
function modalOn() {
  modal.style.display = "flex";
}
function modalOff() {
  modal.style.display = "none";
}

const btnModal = document.getElementById("btn-modal");
const conModal = document.getElementById("modal");
const login = document.getElementById("login");
btnModal.addEventListener("click", (e) => {
  conModal.classList.add("on");
});
login.addEventListener("click", (e) => {
  conModal.classList.toggle("on");
});
