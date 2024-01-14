import "./pages/index.css";
import { createCard, deleteCard, likeCard } from "./components/card.js";
import { openModal, closeModal } from "./components/modal.js";

// Импорт картинок
//import {initialCards} from "./components/cards.js";              ????

import arkhyzImage from "./images/arkhyz.jpg";
import chelyabImage from "./images/chelyabinsk-oblast.jpg";
import ivanovoImage from "./images/ivanovo.jpg";
import kamchImage from "./images/kamchatka.jpg";
import kholmImage from "./images/kholmogorsky-rayon.jpg";
import baikalImage from "./images/baikal.jpg";

const initialCards = [
  {
    name: "Архыз",
    link: arkhyzImage,
  },
  {
    name: "Челябинская область",
    link: chelyabImage,
  },
  {
    name: "Иваново",
    link: ivanovoImage,
  },
  {
    name: "Камчатка",
    link: kamchImage,
  },
  {
    name: "Холмогорский район",
    link: kholmImage,
  },
  {
    name: "Байкал",
    link: baikalImage,
  },
];

//DOM узлы

const placesList = document.querySelector(".places__list");
const profileAddButton = document.querySelector(".profile__add-button"); //кнопка добавления новой карточки
const popupTypeNewCard = document.querySelector(".popup_type_new-card"); //попап новой карточки
const profileEditButton = document.querySelector(".profile__edit-button"); //кнопка редактирования профиля
const popupTypeEdit = document.querySelector(".popup_type_edit"); //попап профиля
const popupTypeImage = document.querySelector(".popup_type_image"); //попап фулскрин картинки
const popup = document.querySelectorAll(".popup"); //все попапы
const popupImage = document.querySelector(".popup__image"); //фулскрин картинка
const popupCaption = document.querySelector(".popup__caption"); //название фулскрин картинки

//Вывести карточки на страницу

initialCards.forEach(function ({ link, name }) {
  const newcard = createCard(
    link,
    name,
    deleteCard,
    openPopupTypeImage,
    likeCard
  );
  placesList.append(newcard);
});

//Открытие попапа новой карточки

profileAddButton.addEventListener("click", function () {
  openModal(popupTypeNewCard);
});

//Открытие попапа профиля

profileEditButton.addEventListener("click", function () {
  nameInput.value = document.querySelector(".profile__title").textContent;
  jobInput.value = document.querySelector(".profile__description").textContent;
  openModal(popupTypeEdit);
});

//Закрытие попапов

popupTypeNewCard
  .querySelector(".popup__close")
  .addEventListener("click", function () {
    formNewPlace.reset();
    closeModal(popupTypeNewCard);
  });

popupTypeEdit
  .querySelector(".popup__close")
  .addEventListener("click", function () {
    closeModal(popupTypeEdit);
  });

popupTypeImage
  .querySelector(".popup__close")
  .addEventListener("click", function () {
    closeModal(popupTypeImage);
  });

//Закрытие попапов кликом на оверлей

popup.forEach(function (item) {
  item.addEventListener("click", function (event) {
    if (event.target.classList.contains("popup_is-opened")) {
      closeModal(popupTypeNewCard);
      closeModal(popupTypeEdit);
      closeModal(popupTypeImage);
    }
  });
});

//Функция открытия попапа с картинкой

function openPopupTypeImage(name, link) {
  popupImage.src = link;
  popupCaption.textContent = name;
  openModal(popupTypeImage);
}

//Добавление новой карточки

const formNewPlace = document.querySelector(
  ".popup_type_new-card .popup__form"
);

const cardNameInput = formNewPlace.querySelector(
  ".popup__input_type_card-name"
);
const linkInput = formNewPlace.querySelector(".popup__input_type_url");

formNewPlace.addEventListener("submit", function (evt) {
  evt.preventDefault();

  const nameValue = cardNameInput.value;
  const linkValue = linkInput.value;

  const newPlaceCard = createCard(
    linkValue,
    nameValue,
    deleteCard,
    openPopupTypeImage,
    likeCard
  );
  placesList.prepend(newPlaceCard);

  formNewPlace.reset();
  closeModal(popupTypeNewCard);
});

//Редактирование формы профиля

const formEditProfile = document.querySelector(".popup_type_edit .popup__form");
const nameInput = formEditProfile.querySelector(".popup__input_type_name");
const jobInput = formEditProfile.querySelector(
  ".popup__input_type_description"
);

function handleFormSubmit(evt) {
  evt.preventDefault();

  const jobValue = jobInput.value;
  document.querySelector(".profile__title").textContent = nameValue;
  document.querySelector(".profile__description").textContent = jobValue;

  formEditProfile.reset();

  closeModal(popupTypeEdit);
}

formEditProfile.addEventListener("submit", handleFormSubmit);
