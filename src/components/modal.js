//Открытие модального окна

function openModal(popup) {
  popup.classList.add("popup_is-opened");
  popup.classList.add("popup_is-animated");
  document.addEventListener("keydown", function (evt) {
    if (evt.key === "Escape") {
      closeModal(popup);
    }
  });
}

//Закрытие модального окна

function closeModal(popup) {
  popup.classList.remove("popup_is-opened");
  document.removeEventListener("keydown", function (evt) {
    if (evt.key === "Escape") {
      closeModal(popup);
    }
  });
}

export { openModal, closeModal };
