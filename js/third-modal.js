(() => {
  const refs = {
    openModalBtn: document.querySelector("[third-modal-open]"),
    closeModalBtn: document.querySelector("[third-modal-close]"),
    modal: document.querySelector("[third-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();