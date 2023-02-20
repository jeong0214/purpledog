const modal = document.getElementById("modal");
const btnModal = document.getElementById("btn-modal");
btnModal.addEventListener("click", (e) => {
  modal.style.display = "flex";
});
modal.addEventListener("click", (e) => {
  const evTarget = e.target;
  if (evTarget.classList.contains("login_frame")) {
    modal.style.display = "none";
  }
});
