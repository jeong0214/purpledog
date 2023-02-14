const search_modal = document.getElementById("search_modal");
function modalOn() {
  search_modal.style.display = "flex";
}
function modalOff() {
  search_modal.style.display = "none";
}

const btnsearch = document.getElementById("btn-search");
const consearch_modal = document.getElementById("search_modal");
btnsearch.addEventListener("click", (e) => {
  consearch_modal.classList.add("on");
});
consearch_modal.addEventListener("click", (e) => {
  consearch_modal.classList.toggle("on");
});
