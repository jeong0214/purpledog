const search_modal = document.getElementById("search");
const btnsearch = document.getElementById("btn-search");
const consearch_modal = document.getElementById("search_modal");
btnsearch.addEventListener("click", (e) => {
  consearch_modal.classList.add("on");
});
search.addEventListener("click", (e) => {
  consearch_modal.classList.toggle("on");
});
