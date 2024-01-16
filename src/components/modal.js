//Открытие модального окна

function openModal(popup) {
  popup.classList.add("popup_is-opened");
  popup.classList.add("popup_is-animated");
  document.addEventListener("keydown", closeModalByEsc);
}

//Закрытие модального окна

function closeModal(popup) {
  popup.classList.remove("popup_is-opened");
  document.removeEventListener("keydown", closeModalByEsc);
}

//Закрытие модального окна по ESC

function closeModalByEsc(evt) {
  if (evt.key === "Escape") {
    closeModal(document.querySelector(".popup_is-opened"));
  }
}

//Закрытие попапов кликом на оверлэй

function closePopupByOverlay(event) {
  if (event.target.classList.contains("popup_is-opened")) {
    closeModal(event.currentTarget);
  }
}

export { openModal, closeModal, closePopupByOverlay };
