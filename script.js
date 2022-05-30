const openModal = document.querySelector(".btn-open");
const closeModal = document.querySelector(".btn-close");
const model = document.querySelector(".modal-content");
openModal.addEventListener("click", function () {
  model.classList.remove("hidden");
});
closeModal.addEventListener("click", function () {
  model.classList.add("hidden");
});
